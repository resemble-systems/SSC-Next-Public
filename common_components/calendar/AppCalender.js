import React, { Component } from "react";
import { addClass } from "@syncfusion/ej2-base";
import { CalendarComponent } from "@syncfusion/ej2-react-calendars";
import moment from "moment";
//service
import { setCalendarMarks } from "../../services/eventService";
//css
import styles from "./calendar.module.sass";

export default class AppCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateArray: [],
    };
    this.date = "";
    this.oneDay = 86400000;
  }

  componentDidMount() {
    this.setText();
  }

  setText = () => {
    let monthDiv = document.createElement("div");
    let month = document.querySelector(".e-header.e-month .e-day.e-title");
    let buttonContainer = document.querySelector(
      ".e-header.e-month .e-icon-container"
    );
    let monthText = month.innerText;
    let displayDate = monthText.split(" ");
    monthDiv.className = styles.calendar_month_display;
    month.className = `${styles.calendar_year_display} e-day e-title`;
    month.innerText = displayDate[1];
    monthDiv.innerText = displayDate[0];
    if (buttonContainer.childNodes.length === 2)
      buttonContainer.insertBefore(monthDiv, buttonContainer.childNodes[1]);
    else {
      buttonContainer.removeChild(buttonContainer.childNodes[1]);
      buttonContainer.insertBefore(monthDiv, buttonContainer.childNodes[1]);
    }
  };

  onchange = (args) => {
    const { eventsData } = this.props;
    let displayEvent = [];

    eventsData.data.forEach((eventData) => {
      args["date"] = args.value;
      if (this.isMarkCalendarDates(eventData, args)) {
        displayEvent.push({
          Type: eventData.attributes.EventType.toString(),
          Title: eventData.attributes.Title,
          id: eventData.id,
        });
      }
    });
    this.props.setSelectedDay(moment(args.value).format("dddd"));
    this.props.setDisplayEvent(displayEvent);
  };
  componentDidUpdate(prevProps, prevState) {
    setTimeout(() => {
      let month = document.querySelector(".e-header.e-month .e-day.e-title");
      if (month.innerText.indexOf(" ") >= 0) this.setText();
    }, 300);
  }

  getDisplayedMonthYear = (dateArray) => {
    if (dateArray.length > 20) {
      let d = new Date(dateArray[20].date);
      let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
      let mo = new Intl.DateTimeFormat("en", { month: "long" }).format(d);
      return [mo, ye];
    }
  };

  isMarkCalendarDates = (eventData, args) => {
    return (
      (args.date.getTime() <=
        new Date(eventData.attributes.StartDate).getTime() &&
        args.date.getTime() + this.oneDay >=
          new Date(eventData.attributes.StartDate).getTime()) ||
      (args.date.getTime() >
        new Date(eventData.attributes.StartDate).getTime() &&
        args.date.getTime() < new Date(eventData.attributes.EndDate).getTime())
    );
  };

  getData = (args, eventsData, servicesData) => {
    let result = [];
    if (eventsData?.data) {
      eventsData?.data?.forEach((eventData) => {
        if (this.isMarkCalendarDates(eventData, args)) {
          result.push([eventData?.attributes?.EventType?.toString(), 1]);
        }
      });
    }
    //remove duplicate
    let finalArray = [];
    for (let i = 0; i < result.length; i++) {
      let exists = false;
      for (let j = 0; j < finalArray.length; j++) {
        if (result[i][0] === finalArray[j][0]) {
          exists = true;
          break;
        }
      }
      if (!exists) {
        finalArray.push(result[i]);
      }
    }
    let serviceRelatedEvents = [];
    if (servicesData?.data) {
      serviceRelatedEvents = servicesData.data.filter(
        (service) => service.attributes.IsEvent === "Yes"
      );
    }
    let chartValue = [["Events", "events per Day"]];

    serviceRelatedEvents?.forEach((serviceRelatedEvent) => {
      let resultArray = finalArray.find(
        (finaldata) =>
          serviceRelatedEvent.attributes.ServiceType === finaldata[0]
      );
      if (resultArray && resultArray.length > 0) {
        chartValue.push(resultArray);
      } else {
        chartValue.push(["Empty", 1]);
      }
    });

    return chartValue;
  };

  customDates(args) {
    const { eventsData, servicesActivities } = this.props;

    this.setState({ dateArray: [...this.state.dateArray, args] }, () => {
      this.date = this.getDisplayedMonthYear(this.state.dateArray);
    });
    let chartData = this.getData(args, eventsData, servicesActivities);
    eventsData?.data?.forEach((eventData) => {
      if (this.isMarkCalendarDates(eventData, args)) {
        this.specialDate(
          args,
          eventData.attributes.Title.split(" ").join("-"),
          chartData
        );
      }
    });
  }

  specialDate(args, name, chartData) {
    args.element.firstElementChild.setAttribute("title", name);
    addClass([args.element], ["e-day", "special", name.toLowerCase(), "flex"]);
    args.element.setAttribute("data-val", name);
    args.element.setAttribute("title", name);
    let innerText = args.element.firstElementChild.innerText;
    this.getChart(args, args.element.id, innerText, chartData);
  }

  getChart = (args, id, innerText, chartData) => {
    let value = 100;
    if (screen.width < 500) value = 90;
    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(drawChart);

    let slices = [
      ...setCalendarMarks(chartData, this.props.servicesActivities),
    ];
    function drawChart() {
      var data = google.visualization.arrayToDataTable(chartData);
      var options = {
        width: value,
        height: value,
        legend: "none",
        tooltip: { trigger: "none" },
        backgroundColor: { fill: "transparent" },
        pieSliceText: "none",
        slices: slices,
        pieHole: 0.7,
      };
      var chart = new google.visualization.PieChart(
        document.getElementById(id).firstElementChild
      );
      chart.draw(data, options);
      args.element.firstElementChild.firstElementChild.removeAttribute("style");
      args.element.firstElementChild.firstElementChild.setAttribute(
        "style",
        "position: absolute;"
      );
      args.element.firstElementChild.innerHTML += innerText;
    }
  };

  render() {
    return (
      <>
        <CalendarComponent
          id={`${styles.calendar}`}
          renderDayCell={this.customDates.bind(this)}
          change={this.onchange}
          //   start={this.state.view}
          //   depth={this.state.view}
          className="e-customStyle"
        ></CalendarComponent>
      </>
    );
  }
}
