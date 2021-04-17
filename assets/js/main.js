function testClick(className) {
  let clsParent = document.getElementsByClassName(`${className}`);
  return console.log(clsParent[0].style.cssText);
}
function showOnTab(classNameParent, typeDisplayParent, classNameLayout = '', typeDisplayLayout = '') {
  let clsParent = document.getElementsByClassName(`${classNameParent}`);
  let clsLayout = (classNameLayout !== '') ? document.getElementsByClassName(`${classNameLayout}`) : undefined;
  let displayParent = typeDisplayParent.split('|');
  let displayLayout = (typeDisplayLayout !== '') ? typeDisplayLayout.split('|') : undefined;

  // console.log(clsParent[0].style.cssText);
  // console.log(clsLayout[0].style.cssText);

  // Check tab Layout
  if (clsLayout) {
    if (clsLayout[0].style.cssText === ' ') {
      clsLayout[0].style.cssText = displayLayout[0];
    }
    if (clsLayout[0].style.cssText === displayLayout[0]) {
      clsLayout[0].style.cssText = displayLayout[1];
      // console.log('clsLayout: Off');
    } else {
      clsLayout[0].style.cssText = displayLayout[0];
      // console.log('clsLayout: On');
    }
  }
  // Check tab Parent
  if (clsParent[0].style.cssText === ' ') {
    clsParent[0].style.cssText = displayParent[0];
  }
  if (clsParent[0].style.cssText === displayParent[0]) {
    clsParent[0].style.cssText = displayParent[1];
    // console.log('clsParent: Off');
  } else {
    clsParent[0].style.cssText = displayParent[0];
    // console.log('clsParent: On');
  }
}