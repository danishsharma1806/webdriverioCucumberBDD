import *as faker from 'faker'
class RandomEmail
{
    makeRandomEmail() 
    {
        var email=faker.internet.email();
        return email;
    }
    titles=
    {
        Login:"Login - My Store",
        Regitration:"My account - My Store",
        WomenCollction:"Women - My Store",
        Order:"Order - My Store",
        Payement:"My Store",
        ConfirmOrder:"Order confirmation - My Store"
    }
}
export default new  RandomEmail();