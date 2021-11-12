
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

let selectAllInSection = (event) => {
  let sectionId = $(event.target).closest('.panel').attr('id');
  let isChecked = $(`#${sectionId} .select-all`).prop('checked');

  $(`#${sectionId} input[type=checkbox]`).prop('checked', isChecked);

  if(sectionId === 'ensemble-filter_ensembles') {
    toggleNonEnsembleSections(isChecked);
  } else if (isChecked) {
    $(`#${sectionId} .panel-body`).addClass('hidden');
  } else {
    $(`#${sectionId} .panel-body`).removeClass('hidden');
  }
}

let selectFilterOption = (event) => {
  let sectionId = $(event.target).closest('.panel').attr('id');
  let anyChecked = checkSiblings(sectionId);

  if(sectionId === 'ensemble-filter_ensembles' && anyChecked) {
    toggleNonEnsembleSections(true);
  }
}

let toggleNonEnsembleSections = (enableSection) => {
  let nonEnsembleSections = $('#ensemble-filter_sections, #ensemble-filter_positions, #ensemble-filter_grades');

  nonEnsembleSections
    .find('.select-all')
    .prop('disabled', !enableSection)
    .prop('checked', true)
    .prop('indeterminate', false);

  nonEnsembleSections
    .find('.panel-body')
    .addClass('hidden');
}

let checkSiblings = (sectionId) => {
  let all = $(`#${sectionId} .section-selection-grid input[type=checkbox]`).length
  let checked = $(`#${sectionId} .section-selection-grid input[type=checkbox]:checked`).length;

  if (checked == 0) {
    $(`#${sectionId} .select-all`)
      .prop('checked', false)
      .prop('indeterminate', false);
    return false;
  }

  if (checked >= 1 && checked < all) {
    $(`#${sectionId} .select-all`)
      .prop('checked', true)
      .prop('indeterminate', true);
    return true;
  }

  if (checked == all) {
    $(`#${sectionId} .select-all`)
      .prop('checked', true)
      .prop('indeterminate', false);
    return true;
  }
}
