// @ts-check

const mathintensity = {
  G: "General",
  M: "Moderate",
  S: "Substantial",
  undefined: "",
};

/**
 *
 * @param {Object.<string, any>} row
 *
 */
// @ts-ignore
function degreeDataPropResolverService(row = {}) {
  return {
    getMajorDesc: () => row["Descr100"],
    getInstitution: () => row["Institution"],
    getAcadPlan: () => row["AcadPlan"],
    getDegree: () => row["Degree"],
    getDegreeDesc: () => row["DegreeDescr"],
    getDegreeDescLong: () => row["DegreeDescrlong"],
    getDescrLongExtented: () => row["DescrlongExtns"],
    getCurriculumUrl: () => row["CurriculumUrl"]?.trim(),
    getDescrLongExtented5: () => row["DescrlongExtn5"],
    getTransferAdmission: () => row["TransferAdmission"],
    isOnline: () => row["managedOnlineCampus"],
    getOnlineMajorMapURL: () => row["onlineMajorMapURL"],
    getAsuCritTrackUrl: () => row["AsuCritTrackUrl"],
    hasCareerData: () => !!row["careerData"]?.length,
    getCareerData: () => row["careerData"] || [],
    /** @return {string []} */
    getCampusList: () => row["CampusStringArray"] || [],
    hasConcurrentOrAccelerateDegrees: () =>
      !!row["accelerateDegrees"]?.length || !!row["concurrentDegrees"]?.length,
    getAccelerateDegrees: () => row["accelerateDegrees"] || [],
    getConcurrentDegrees: () => row["concurrentDegrees"] || [],
    getCollegeDesc: () => {
      // webservice value example "for Design and the Arts, Herberger Institute"
      /** @type {String} */
      const collegeDescRaw = row["CollegeDescr100"];
      const collegeDesc = collegeDescRaw
        ? collegeDescRaw.split(",").reverse().join(" ").trim()
        : "";
      return collegeDesc;
    },
    getCollegeUrl: () => row["CollegeUrl"],
    /** @return {string} */
    getEmailAddress: () => row["EmailAddr"],
    /** @return {string} */
    getPhone: () => row["Phone"],
    /** @return {string} */
    getGDepartmentName: () => row["DepartmentName"],
    // AsuProgramFee
    getAsuProgramFee: () => row["AsuProgramFee"],
    hasAsuProgramFee: () => row["AsuProgramFee"] === "Y",
    // AsuLangReqFlag
    getAsuLangReqFlag: () => row["AsuLangReqFlag"],
    hasAsuLangReqFlag: () => row["AsuLangReqFlag"] === "Y",
    getAcadPlanText: () => row["asuAcadpLrfText"],
    // asuMathReqFlag
    getMathReqFlag: () => row["asuMathReqFlag"],
    hasMathReqFlag: () => row["asuMathReqFlag"] === "Y",
    getAdditionalMathReqCourse: () => row["additionalMathReqCourse"],
    getOtherMathReqCourse: () => row["asuAcadpMrfText"],
    getMathIntensity: () => mathintensity[row["MathIntensity"]],
    getMathIntensityRawValue: () => row["MathIntensity"],
    getMinMathReq: () => row["MinMathReq"] || "",
    getMarketText: () => row["marketText"],
    /** @return {string} */
    getAsuOfficeLoc: () => row["AsuOfficeLoc"] || "",
    /** @return {string} */
    getCampusWue: () => row["campusWue"] || "",
    getConcurrentDegreeMajorMaps: () => row["concurrentDegreeMajorMaps"]?.[0],
    getChangeMajor: () => row["ChangeMajor"],
    getAsuCareerOpportunity: () => row["AsuCareerOpp"],
    getGlobalExp: () => row["globalExp"]?.trim(),
    /** @return {string} */
    getCollegeAcadOrg: () => row["CollegeAcadOrg"],
    /** @return {string} */
    getDepartmentCode: () => row["DepartmentCode"],
  };
}

/**
 *
 * @param {import("src/core/models/shared-types").DegreeDataPropResolver} resolver
 * @returns {import("src/core/models/shared-types").LinkItem[]}
 */
function getCampusLocations(resolver) {
  const locations = [];

  if (resolver.getCampusList().length > 0)
    locations.push(
      ...resolver.getCampusList().map(location => ({
        text: location,
        url: "#",
      }))
    );

  // TODO: double check if still needed.
  // TODO: th this is classroom not a location.
  // if (resolver.getAsuOfficeLoc())
  //   locations.push({
  //     text: resolver.getAsuOfficeLoc(),
  //     url: "#",
  //   });

  if (resolver.getCampusWue())
    locations.push({
      text: resolver.getCampusWue(),
      url: "#",
    });

  return locations;
}

/**
 *
 * @param {import("src/core/models/program-detail-types").AnchorMenuProps} anchorMenu
 * @param {import("src/core/models/shared-types").DegreeDataPropResolver} resolver
 */
const filterAnchorMenu = (anchorMenu, resolver) => {
  const validAnchors = { ...anchorMenu };

  if (validAnchors.globalOpportunity && !resolver.getGlobalExp()) {
    validAnchors.globalOpportunity = false;
  }
  if (validAnchors.careerOutlook && !resolver.getAsuCareerOpportunity()) {
    validAnchors.careerOutlook = false;
  }
  if (validAnchors.attendOnline && !resolver.getCurriculumUrl()) {
    validAnchors.attendOnline = false;
  }

  return validAnchors;
};

/**
 *
 * @param {import("src/core/models/program-detail-types").AnchorMenuProps} anchorMenu
 * @returns
 */
const hasValidAnchorMenu = anchorMenu => {
  const res =
    Object.keys(anchorMenu).filter(key => key !== "externalAnchors").length >
      0 || anchorMenu?.externalAnchors?.length > 0;
  return res;
};

export {
  degreeDataPropResolverService,
  filterAnchorMenu,
  getCampusLocations,
  hasValidAnchorMenu,
};
