class SearchView {
    #parentEl = document.querySelector('.search');
  
    getQuery() {
      const query = this.#parentEl.querySelector('.search__field').value;
      this.#parentEl.querySelector('.search__field').value;
      this.#clearInput();
        return query;
    }

    #clearInput() {
        this.#parentEl.querySelector('.search__field').value = '';
      }

    addHandlerSearch(handler) {
        this.#parentEl.addEventListener('submit', function (e) {
            e.preventDefault();
            handler();
        });
    }
  
    addHandlerClick(handler) {
      this.#parentEl.addEventListener('click', handler);
    }
  }
  
  export default new SearchView();