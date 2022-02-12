export const getSectionList = (flatList) => {

    if (Array.isArray(flatList)) {
        return flatList.reduce((accumulator, currentValue, index) => {
          const acc = Array.isArray(accumulator) ? accumulator : [];
          const accumulatorEntity = acc.find(
            (item) => item.sectionName === currentValue.sectionName
          );
          if (accumulatorEntity) {
            accumulatorEntity.courseList.push(currentValue);
          } else {
            acc.push({
              sectionName: currentValue.sectionName,
              courseList: [currentValue]
            });
          }
          return acc;
        }, Object.create(null));
      } else {
        return [];
      }
}

