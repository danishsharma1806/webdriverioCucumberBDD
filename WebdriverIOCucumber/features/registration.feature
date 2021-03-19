Feature: Automate web store
Scenario: User should be able to place an order
Given User is on landing page and is able to click signIn button
When User should be able to create an account by giving legit email Id
Then User should be able to  fill personal details
    | FirstName  |  LastName  |
    |     Danish |    Sharma  |
    |     Dan@12 |        18  |
    |       6    |       1998 |
    | Capgemini  |            |
And User should be able to fill address details
    |   Address1 |     Address2 |
    | B-252      |     Alkapuri |
    | Ratlam     |            1 |
    | 45701      |           21 |
    | 5102547891 | 72-Globus Town |
And User should be able to add the dress to the cart  
And User should be able to proceed to checkout
Then User should be able to place and confirm order