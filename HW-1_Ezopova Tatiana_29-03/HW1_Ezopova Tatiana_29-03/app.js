var userBirthMonth = prompt('Enter your month of birth');
var userBirthDay = Number(prompt('Enter your day of birth'));

if(userBirthMonth === 'March' && userBirthDay >=21 && userBirthDay <=31 || userBirthMonth === 'April' && userBirthDay <=19 && userBirthDay <=30){
    console.log('Your Zodiac Sign is Aries')
}
else if(userBirthMonth === 'April' && userBirthDay >=20 && userBirthDay <=30 || userBirthMonth === 'May' && userBirthDay <=20 && userBirthDay <=31){
    console.log('Your Zodiac Sign is Taurus')
}
else if(userBirthMonth === 'May' && userBirthDay >=21 && userBirthDay <=31 || userBirthMonth === 'June' && userBirthDay <=20 && userBirthDay <=30){
    console.log('Your Zodiac Sign is Gemini')
}
else if(userBirthMonth === 'June' && userBirthDay >=21 && userBirthDay <=30 || userBirthMonth === 'July' && userBirthDay <=22 && userBirthDay <=31){
    console.log('Your Zodiac Sign is Cancer')
}
else if(userBirthMonth === 'July' && userBirthDay >=21 && userBirthDay <=31 || userBirthMonth === 'August' && userBirthDay <=22 && userBirthDay <=31){
    console.log('Your Zodiac Sign is Leo')
}
else if(userBirthMonth === 'August' && userBirthDay >=21 && userBirthDay <=31 || userBirthMonth === 'September' && userBirthDay <=22 && userBirthDay <=30){
    console.log('Your Zodiac Sign is Virgo')
}
else if(userBirthMonth === 'September' && userBirthDay >=21 && userBirthDay <=30 || userBirthMonth === 'October' && userBirthDay <=22 && userBirthDay <=31){
    console.log('Your Zodiac Sign is Libra')
}
else if(userBirthMonth === 'October' && userBirthDay >=21 && userBirthDay <=31 || userBirthMonth === 'November' && userBirthDay <=22 && userBirthDay <=30){
    console.log('Your Zodiac Sign is Scorpio')
}
else if(userBirthMonth === 'November' && userBirthDay >=21 && userBirthDay <=30 || userBirthMonth === 'December' && userBirthDay <=22 && userBirthDay <=31){
    console.log('Your Zodiac Sign is Sagittarius')
}
else if(userBirthMonth === 'December' && userBirthDay >=21 && userBirthDay <=31 || userBirthMonth === 'January' && userBirthDay <=22 && userBirthDay <=31){
    console.log('Your Zodiac Sign is Capricorn')
}
else if(userBirthMonth === 'January' && userBirthDay >=21 && userBirthDay <=31 || userBirthMonth === 'February' && userBirthDay <=22 && userBirthDay <=29){
    console.log('Your Zodiac Sign is Aquarius')
}
else if(userBirthMonth === 'February' && userBirthDay >=21 && userBirthDay <=29 || userBirthMonth === 'March' && userBirthDay <=22 && userBirthDay <=31) {
    console.log('Your Zodiac Sign is Pisces')
}
else {
    alert('Please enter correct data')
}



