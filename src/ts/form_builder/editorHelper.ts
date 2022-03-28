import { FormBuilderOptions } from 'types/formbuilder-types'
import { FormBuilder } from './formBuilder'

export class FormBuilderEditorHelper {
  constructor(public opts: FormBuilderOptions, public fb: FormBuilder) {
    this.init()
  }

  init() {
    const $editorWrap = $(this.fb.editorWrap)

    $('<div class="snackbar">').appendTo($editorWrap)

    const cbWrap: HTMLElement = this.fb.m('div', this.fb.control, {
      id: `${this.fb.formID}-cb-wrap`,
      className: `cb-wrap pull-${this.fb.opts.controlPosition}`,
    })

    if (this.fb.opts.showActionButtons) {
      cbWrap.appendChild(this.fb.formActions)
    }

    this.fb.gh.gridModeHelp = this.fb.m('div', '', {
      id: `${this.fb.formID}-gridModeHelp`,
      className: 'grid-mode-help',
    })

    cbWrap.appendChild(this.fb.gh.gridModeHelp)

    $editorWrap.append(this.fb.stage, cbWrap)

    $(this.fb.el).append($editorWrap)
  }
}
