import { useEffect, useState } from 'react';

/**
 * A Custom hook for creating React Multi Step Forms.
 *
 * @param {Array.<React.Component> | Array.<JSX.Element>} allFormSections - An Array containing all Sections of the Multi Step Form
 * @return {{changeActiveSectionNumber: function, activeSectionNumber: number, maxSectionReached: number, resetMultiStepProgress: function, activeSection: React.Component}}
 */
const useMultiStepForm = allFormSections => {
  const totalSections = allFormSections.length;

  /**
   * activeSectionNumber keeps track of the Currently
   * Active Form Section Number.
   */
  const [activeSectionNumber, setActiveSectionNumber] = useState(1);

  /**
   * maxSectionReached keeps track of the Max Form
   * Section Number user has reached.
   */
  const [maxSectionReached, setMaxSectionReached] = useState(1);

  /**
   * activeSection represents the currently active
   * Form Section.
   * @type React.Component
   */
  const activeSection = allFormSections[activeSectionNumber - 1];

  useEffect(() => {
    if (activeSectionNumber > maxSectionReached) {
      setMaxSectionReached(activeSectionNumber);
    }
  }, [activeSectionNumber]);

  /**
   * changeActiveSectionNumber is responsible changing the
   * current active section number.
   * It can be used to traverse all the form sections.
   *
   * @param {Number} newActiveSectionNumber - New Active Section Number
   */
  const changeActiveSectionNumber = newActiveSectionNumber => {
    setActiveSectionNumber(currentActiveSection => {
      if (newActiveSectionNumber > totalSections) {
        return currentActiveSection;
      } else if (newActiveSectionNumber < 1) {
        return currentActiveSection;
      }
      return newActiveSectionNumber;
    });
  };

  /***
   * resetMultiStepProgress is responsible for resetting
   * the progress of the user along the multi step Form.
   */
  const resetMultiStepProgress = () => {
    setActiveSectionNumber(1);
    setMaxSectionReached(1);
  };

  return {
    activeSection,
    activeSectionNumber,
    maxSectionReached,
    changeActiveSectionNumber,
    resetMultiStepProgress,
  };
};

export default useMultiStepForm;
