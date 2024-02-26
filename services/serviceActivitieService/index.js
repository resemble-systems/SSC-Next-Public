export const mapTypeToRoutePath = (type) => {
  switch (type) {
    case "WellbeingAwareness":
      return "wellbeing-awareness";
    case "FamilySocial":
      return "family-social";
    case "VirtualSportsRecreational":
      return "virtual-sports-recreational";
    case "ReligiousActivities":
      return "religious-activities";
    case "EntertainmentOnlineGames":
      return "entertainment-online-game";
    case "EducationalCourses":
      return "educational-courses";
    case "IsDBGroupActivities":
      return "isDB-group-activities";
    case "BuyandSell":
      return "buy-sell";
  }
};

export const mapRoutePathToType = (path) => {
  switch (path) {
    case "wellbeing-awareness":
      return "WellbeingAwareness";
    case "family-social":
      return "FamilySocial";
    case "virtual-sports-recreational":
      return "VirtualSportsRecreational";
    case "religious-activities":
      return "ReligiousActivities";
    case "entertainment-online-game":
      return "EntertainmentOnlineGames";
    case "educational-courses":
      return "EducationalCourses";
    case "isDB-group-activities":
      return "IsDBGroupActivities";
    case "buy-sell":
      return "BuyandSell";
  }
};

export const cardIcon = (type) => {
  switch (type) {
    case "WellbeingAwareness":
      return "/serviceActivities/WellbeingAwareness.svg";
    case "FamilySocial":
      return "/serviceActivities/Family & Social  Welfare.svg";
    case "VirtualSportsRecreational":
      return "/serviceActivities/Virtual Sports & Recreational.svg";
    case "ReligiousActivities":
      return "/serviceActivities/Religious Activities.svg";
    case "EntertainmentOnlineGames":
      return "/serviceActivities/Entertainment & Online Game.svg";
    case "EducationalCourses":
      return "/serviceActivities/Educational Courses.svg";
    case "IsDBGroupActivities":
      return "/serviceActivities/IsDB Group  Activities.svg";
    case "BuyandSell":
      return "/serviceActivities/Buy and Sell.svg";
  }
};
