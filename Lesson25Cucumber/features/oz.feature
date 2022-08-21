

Feature: https://oz.by/ tests

  Scenario:  navigate to "https://oz.by/"

    Given I navigate to "https://oz.by/" page
    Then I expect that title to equal "OZ.by — интернет-магазин. Книги, игры, косметика, товары для дома, творчества, подарки, продукты. Доставка по Беларуси."
  
  Scenario: login on the page

    When I click on ".top-panel__userbar__auth" element
    When I click on "#loginFormLoginEmailLink" element
    And I input text "theoryyyy93@gmail.com" to ".i-input-group__cell .i-input[type='email']" field
    And I input text "LB3RET" to ".i-input[type='password']" field
    And I click on ".i-popup__form-button[form='loginForm']" element
    Then I expect that ".top-panel__userbar__user__name" component to equal "oz18719318"

  Scenario:  check search field

    When I click on "#top-s[name]" element
    When I input text "Javascript" to "#top-s[name]" field
    And I press Enter
    Then I expect that ".breadcrumbs__list__item [itemprop]" component contain "javascript"

