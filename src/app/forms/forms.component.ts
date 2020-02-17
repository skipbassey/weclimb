import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: [
    './forms.component.scss',
    '../../theme/font.scss'
  ],
})
export class FormsComponent implements OnInit {

  adultIntakeUrl = 'https://fbd77605-65f9-4422-9edf-096e90f4cb9a.filesusr.com/ugd/007d05_3408979cc10a44ce9a67d840a7a89a85.pdf'

  constructor() { }

  ngOnInit() {}

}
