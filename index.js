document.querySelectorAll('.box-select').forEach(e => e.addEventListener('click', calc) );

function calc(e) {
    let summ = this.querySelector('.summ');
    if (e.target.dataset.id) {
        let new_div = `<div>${e.target.outerHTML.replace(/option/g,'span')}<span class="close">X</span></div>`;
        e.target.disabled = true;
        this.querySelector('.list').insertAdjacentHTML('beforeEnd', new_div);
        summ.textContent = +this.querySelector('.summ').textContent + +e.target.dataset.val;
    }
    if (e.target.classList.contains('close')) {
        let data_val = +e.target.previousElementSibling.dataset.val;
        this.querySelector(`[data-val="${data_val}"]`).disabled = false;
        e.target.closest('div').remove();
        summ.textContent = +this.querySelector('.summ').textContent - data_val;
    }
    document.querySelector('.total_span').textContent = [...document.querySelectorAll('.summ')].map(e => +e.textContent).reduce((a,b) => a + b);
}


