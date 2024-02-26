export const setBackground = (item, servicesActivities) => {
  let eventTypeColor = item?.Type || item?.attributes?.EventType;
  let arrayBgImage = [
    "/upcomingEvent/Activities_Icons_Set2.svg",
    "/upcomingEvent/Activities_Icons_Set3.svg",
    "/upcomingEvent/Activities_Icons_Set4.svg",
    "/upcomingEvent/Activities_Icons_Set5.svg",
  ];
  let bg, boxShadow;
  // let bgImage = arrayBgImage[Math.floor(Math.random() * arrayBgImage.length)];
  let bgImage = arrayBgImage[Math.floor(item.id * arrayBgImage.length) % 4];

  let service = servicesActivities?.data?.find((service) => {
    return (
      service.attributes.ServiceType?.toLowerCase() ===
      item?.Type?.toLowerCase()
    );
  });
  bg = service?.attributes?.Color;
  boxShadow = `0px 3px 18px ${service?.attributes?.Color}40`;
  return [bg, bgImage, boxShadow];
};

export const setCalendarMarks = (datas, servicesData) => {
  let result = [];
  datas.slice(1).forEach((data) => {
    let selectedService = null;
    selectedService = servicesData.data.find(
      (service) => service.attributes.ServiceType === data[0]
    );
    if (selectedService)
      result.push({ color: selectedService.attributes.Color });
    else result.push({ color: "#e4e4e4" });
  });
  return result;
};
