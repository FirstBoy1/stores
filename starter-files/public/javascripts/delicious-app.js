import '../sass/style.scss';

import { $, $$ } from './modules/bling';
import autoComplete from './modules/autoComplete';
import typeAhead from './modules/typeAhead';
import ajaxHeart from './modules/heart';

autoComplete($('#address'), $('#lat'), $('#lng'));

typeAhead($('.search'));

const heartForms = $$('form.heart');
heartForms.on('submit', ajaxHeart);
