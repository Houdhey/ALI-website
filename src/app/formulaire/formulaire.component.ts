import { Component, HostListener, Input, OnInit } from '@angular/core';
import { VariableStateService } from '../services/variable-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss'],
})
export class FormulaireComponent implements OnInit {
  constructor(
    public variableStateService: VariableStateService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  doneButton() {
    let form_3 = document.getElementById('form_3');
    let form_3_btns = document.getElementById('form_3_btns');
    let form_3_progessbar = document.getElementById('form_3_progessbar');
    let form_1 = document.getElementById('form_1');
    let form_1_btns = document.getElementById('form_1_btns');
    let form_2_progessbar = document.getElementById('form_2_progessbar');
    console.log('CLICKING DONE');
    let modalWrapper = document.getElementById('modal_wrapper');
    modalWrapper.classList.add('active');

    form_3.style.display = 'none';
    form_3_btns.style.display = 'none';
    form_3_progessbar.classList.remove('active');

    form_1_btns.style.display = 'flex';
    form_1.style.display = 'block';
    form_2_progessbar.classList.remove('active');
  }
  shadowButton() {
    let modalWrapper = document.getElementById('modal_wrapper');
    modalWrapper.classList.remove('active');
  }

  form1Next() {
    let form_1 = document.getElementById('form_1');
    let form_2 = document.getElementById('form_2');

    let form_1_btns = document.getElementById('form_1_btns');
    let form_2_btns = document.getElementById('form_2_btns');

    let form_2_progessbar = document.getElementById('form_2_progessbar');
    form_1.style.display = 'none';
    form_2.style.display = 'block';

    form_1_btns.style.display = 'none';
    form_2_btns.style.display = 'flex';

    form_2_progessbar.classList.add('active');
  }

  form2Back() {
    let form_1 = document.getElementById('form_1');
    let form_2 = document.getElementById('form_2');

    let form_1_btns = document.getElementById('form_1_btns');
    let form_2_btns = document.getElementById('form_2_btns');
    let form_2_progessbar = document.getElementById('form_2_progessbar');
    form_1.style.display = 'block';
    form_2.style.display = 'none';

    form_1_btns.style.display = 'flex';
    form_2_btns.style.display = 'none';

    form_2_progessbar.classList.remove('active');
  }

  form2Next() {
    let form_2 = document.getElementById('form_2');
    let form_3 = document.getElementById('form_3');
    let form_2_btns = document.getElementById('form_2_btns');
    let form_3_btns = document.getElementById('form_3_btns');
    let form_3_progessbar = document.getElementById('form_3_progessbar');
    form_2.style.display = 'none';
    form_3.style.display = 'block';

    form_3_btns.style.display = 'flex';
    form_2_btns.style.display = 'none';

    form_3_progessbar.classList.add('active');
  }

  form3Back() {
    let form_2 = document.getElementById('form_2');
    let form_3 = document.getElementById('form_3');
    let form_2_btns = document.getElementById('form_2_btns');
    let form_3_btns = document.getElementById('form_3_btns');

    let form_3_progessbar = document.getElementById('form_3_progessbar');
    form_2.style.display = 'block';
    form_3.style.display = 'none';

    form_3_btns.style.display = 'none';
    form_2_btns.style.display = 'flex';

    form_3_progessbar.classList.remove('active');
  }
}
