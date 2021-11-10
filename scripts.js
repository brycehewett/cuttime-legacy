
const saveAsGroupOptions = 'input[type=radio][name=saveAsGroupOption]';
const sectionTypeOptions = 'input[type=radio][name=sectionTypeOptions]';
//toggle sections by specifying all, ensemble or non-ensemble
let toggleSections = () => {
  let sectionTypes = $(sectionTypeOptions + ':checked').val();

  switch(sectionTypes) {
    case 'ensemble':
      $('.section-type_ensemble')
        .removeClass('hidden')
        .addClass('show');

      $('.section-type_non-ensemble')
        .removeClass('show')
        .addClass('hidden');
      break;
    case 'non-ensemble':
      $('.section-type_ensemble')
        .removeClass('show')
        .addClass('hidden');

      $('.section-type_non-ensemble')
        .removeClass('hidden')
        .addClass('show');
      break;
    case 'both':
      $('.section-type_ensemble, .section-type_non-ensemble')
        .removeClass('hidden')
        .addClass('show');
      break;
  }
}

let toggleSaveAsGroup = () => {
  $('#save-option_save-group, #save-option_one-time').toggle();
}

let selectAllInSection = (sectionName) => {
  $(`.ensemble-filter_${sectionName}`)
    .find('input[type=checkbox]')
    .prop('checked', $(`.ensemble-filter_${sectionName} .select-all`).prop('checked'));

    console.log(  $(`.ensemble-filter_${sectionName}`)
    .find('input[type=checkbox]'));
}

let selectFilterOption = (event) => {
  console.log($(event.target).parent().parent().siblings())
  let allChecked = checkSiblings(event.target);

}

let checkSiblings = (target) => {
  let allChecked = false; 
  
  $(target).parent().parent().siblings().each(() => {
    let returnVal = allChecked = 
  });

}

$(document).ready(() => {

});
