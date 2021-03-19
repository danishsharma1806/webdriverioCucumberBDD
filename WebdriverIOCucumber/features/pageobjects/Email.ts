import *as faker from 'faker'
class RandomEmail
{
    makeRandomEmail() 
    {
        var email=faker.internet.email();
        return email;
    }
    info= 
    {
        password:"Dan@12",
        firstname:"Danish",
        lastName:"Sharma",
        company:"Amazon",
        address:"B-252",
        addressline:"Alkapuri" ,
        city:"Ratlam",
        pincode:"00000",
        phoneNo:"5123696984",
        Alaisaddress:"72-Globus City"
    }
    titles=
    {
        Login:"Login - My Store",
        Regitration:"My account - My Store",
        WomenCollction:"Women - My Store",
        Order:"Order - My Store",
        Payement:"My Store"
    }
}
export default new  RandomEmail();