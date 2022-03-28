
import { handleNovoItem } from "./componentes/criarTarefa";

const novaTarefa = document.querySelector('[data-form-botton]');

novaTarefa.addEventListener('click', handleNovoItem);

