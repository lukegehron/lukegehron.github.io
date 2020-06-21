Vue.component('titlebar', {
  props: {
  },
  template: `
  <div class="nav-container">
  <nav id="topBar">
    <span id="title" class="logo">luke gehron</span>
    <div class="right-menu" id="tableSpan">
      <table>
        <tr>
          <td>
            <a href="index.html">projects</a>
          </td>
          <td>
            <a href="scripts.html">scripts</a>
          </td>
        </tr>
      </table>
      <table>
        <tr>
          <td>
            <a href="resume.html">résumé</a>
          </td>
          <td>
            <a href="portfolio.html">portfolio</a>
          </td>
        </tr>
      </table>
    </div>
  </nav>
</div>
  `
})