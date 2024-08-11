import View from "./View";
import icons from 'url:../../img/icons.svg';

class resultsView extends View {

    _parentElement = document.querySelector('.results');

    _errorMessage = 'No recipes found for your query. Please try again!';
    _message = '';


      _generateMarkupPreview(result) {
        return `
         <li class="preview">
        <a class="preview__link" href="#${result.id}">
          <figure class="preview__fig">
            <img src="${result.image}" alt="${result.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${result.title}</h4>
            <p class="preview__publisher">${result.publisher}</p>
            <div class="preview__user-generated">
              <svg>
                <use href="${icons}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
        `;
      }

      _generateMarkup() {
        return this._data.map(this._generateMarkupPreview).join('');
    }

}

export default new resultsView();
