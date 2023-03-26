Feature: Greencart End to End scenario

    @smoke
    Scenario: Verify the user is able to place the order

        Given User navigate to Greencart webshop
        When Add the product carrot to cart
        Then Click cart link
        Then click the proceed to checkout link
        Then click Place order on cart page
        Then Select the country India in select country dropdown
        Then check the Agree terms and condition checkbox
        Then click the Proceed button
        Then verify the Thank you place the order message is displayed


        
