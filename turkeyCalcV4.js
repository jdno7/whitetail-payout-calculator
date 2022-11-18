const firstPlacePayout = document.querySelector('#top-ten tr td:nth-child(2)')
const secondPlacePayout = document.querySelector('#top-ten tr:nth-child(2) td:nth-child(2)')
const thirdPlacePayout = document.querySelector('#top-ten tr:nth-child(3) td:nth-child(2)')
const fourthPlacePayout = document.querySelector('#top-ten tr:nth-child(4) td:nth-child(2)')
const fifthPlacePayout = document.querySelector('#top-ten tr:nth-child(5) td:nth-child(2)')
const sixthPlacePayout = document.querySelector('#top-ten tr:nth-child(6) td:nth-child(2)')
const seventhPlacePayout = document.querySelector('#top-ten tr:nth-child(7) td:nth-child(2)')
const eighthPlacePayout = document.querySelector('#top-ten tr:nth-child(8) td:nth-child(2)')
const ninthPlacePayout = document.querySelector('#top-ten tr:nth-child(9) td:nth-child(2)')
const tenthPlacePayout = document.querySelector('#top-ten tr:nth-child(10) td:nth-child(2)')

const twentyPlacePayout = document.querySelector('#on-the-tens tr td:nth-child(2)')
const twentyPlace = document.getElementById('20th')
const thirtyPlacePayout = document.querySelector('#on-the-tens tr:nth-child(2) td:nth-child(2)')
const thirtyPlace = document.getElementById('30th')
const fortyPlacePayout = document.querySelector('#on-the-tens tr:nth-child(3) td:nth-child(2)')
const fortyPlace = document.getElementById('40th')
const fiftyPlacePayout = document.querySelector('#on-the-tens tr:nth-child(4) td:nth-child(2)')
const fiftyPlace = document.getElementById('50th')
const sixtyPlacePayout = document.querySelector('#on-the-tens tr:nth-child(5) td:nth-child(2)')
const sixtyPlace = document.getElementById('60th')
const seventyPlacePayout = document.querySelector('#on-the-tens tr:nth-child(6) td:nth-child(2)')
const seventyPlace = document.getElementById('70th')
const eightyPlacePayout = document.querySelector('#on-the-tens tr:nth-child(7) td:nth-child(2)')
const eightyPlace = document.getElementById('80th')
const ninetyPlacePayout = document.querySelector('#on-the-tens tr:nth-child(8) td:nth-child(2)')
const ninetyPlace = document.getElementById('90th')
const hundredPlacePayout = document.querySelector('#on-the-tens tr:nth-child(9) td:nth-child(2)')
const hundredPlace = document.getElementById('100th')
const overSpursPayout = document.querySelector('#special-harvest tr td:nth-child(2)')
const underSpursPayout = document.querySelector('#special-harvest tr:nth-child(2) td:nth-child(2)')
const overTwentyPayout = document.querySelector('#special-harvest tr:nth-child(3) td:nth-child(2)')
const underTwentyPayout = document.querySelector('#special-harvest tr:nth-child(4) td:nth-child(2)')
const overTenPayout = document.querySelector('#special-harvest tr:nth-child(5) td:nth-child(2)')
const underTenPayout = document.querySelector('#special-harvest tr:nth-child(6) td:nth-child(2)')

const hunterEntries = document.querySelector('#payout-nums tr td:nth-child(1)');
const payoutModel = document.querySelector('#payout-nums tr td:nth-child(2)');
const grossRevenue = document.querySelector('#payout-nums tr:nth-child(4) td:nth-child(1)');
const hunterPayout = document.querySelector('#payout-nums tr:nth-child(4) td:nth-child(2)');
const grossMargin = document.getElementById('gross-margin')

const payouts = {
    '1st': 0,
    '2nd': 0,
    '3rd': 0,
    '4th': 0,
    '5th': 0,
    '6th': 0,
    '7th': 0,
    '8th': 0,
    '9th': 0,
    '10th': 0,
    '20th': 0,
    '30th': 0,
    '40th': 0,
    '50th': 0,
    '60th': 0,
    '70th': 0,
    '80th': 0,
    '90th': 0,
    '100th': 0,
    '110th': 0,
    '120th': 0,
    '130th': 0,
    '140th': 0,
    '150th': 0,
    '160th': 0,
    '170th': 0,
    '180th': 0,
    'spursOver3': 0,
    'spursUnder3': 0,
    'over20Lbs': 0,
    'under20Lbs': 0,
    'beardOver10': 0,
    'beardUnder10': 0,
    'hunterPayout': 0,
    'grossRevenue': 0,
    'payoutModel' : 0
}

const entriesForm = document.querySelector('form');

let hEntries = 500;
calcNewPayout(hEntries)
// hunterEntries.innerText = hEntries;
// grossRevenue.innerText = `$${grossRev(hEntries)}`;
// hunterPayout.innerText = `$${calcHunterPayout()}`;
// document.getElementById('gross-margin').innerText = `$${apexMargin(hEntries,calcHunterPayout())}`;

entriesForm.addEventListener('submit', function(e){
    console.log('submit')
    e.preventDefault();

        hEntries = document.querySelector('input[id ="hunter-entries"]').value;
   
   if (document.querySelectorAll('#new-payout')){

        let oldPayouts = (document.querySelectorAll('#new-payout'));
        oldPayouts.forEach(payout => payout.remove());
}
     
    calcNewPayout(hEntries);

   

//    if (hEntries > 500){
//         // payoutModel.innerText = roundTwoFidy(hEntries);
//         payoutModel.innerText = roundOneTwentyFive(hEntries);
//    }
//    else{
//     payoutModel.innerText = hEntries - hEntries % 10;
//    }
   hunterEntries.innerText = hEntries;
   grossRevenue.innerText = `$${grossRev(hEntries)}`;
   hunterPayout.innerText = `$${calcHunterPayout()}`;
   document.getElementById('gross-margin').innerText = `$${apexMargin(hEntries,calcHunterPayout())}`;
    

})


function apexMargin(a,b){
    const grossMargin = a * 125 - b
    const marginPercentage = grossMargin / grossRev(hEntries)
    if (a * 125 - b < 0){
        document.getElementById('gross-margin').className ='negative';
        return grossMargin;
    }
    else{
    document.getElementById('gross-margin').className = '';
    return `${a * 125 - b} (${marginPercentage.toFixed(2).slice(2)}%)`;
    }
}

function calcHunterPayout(){
    payoutTotal = 0;
    const tdsArr = Array.from(document.querySelectorAll('tr td:nth-child(2)'));
    tdsArr.shift();
    tdsArr.shift();
    const numsArr = tdsArr.forEach(function(td){
        
       payoutTotal += parseInt(td.innerText.replace('$',""));
    
    })
    return payoutTotal;
}

function grossRev(num){
   return num * 125;

}

function roundTwoFidy(num){
    num = num - num % 250;
    return num;
};

function roundOneTwentyFive(num){
    num = num - num % 125;
    return num;
};

function roundToNearestHundred(num){
    num = num - num%100
    return num
}
function roundToNearestFiddy(num){
    num = num - num%50
    return num
}

function calcNewPayout(num) {
    // Rules:
        // Payout Model:
            // Under 400 Total Entries:
                // Round down to the nearest 10
            // Over 400 Total Entries:
                // Round down to the Nearest 50
                
        // Top Scoring Payouts < 100 entries add a place to the payout for every 10 hunters with a minimum of 3 payouts
                // Examples: 
                    // 20 entries = top 3 scores would be paid 
                    // 67 Entries = Top 6 Scores would be paid
        // 












        
        // Round the Payout Model either down nearest 10 or 50
        num < 400 ? num -= num % 10 : num -= num % 50;
  
        // clear previous payout model
        for (let p of Object.keys(payouts)) {
            payouts[p] = 0
        }

    //    desired hunter purse to dispearse prior to rounding
       const apexHunterPurse = num * 125 * .65
       const topTenPurse = apexHunterPurse * .74 
   
       let specialHarvestPayout = 0
       if (num < 400) {
                if (num > 200) specialHarvestPayout = Math.max(roundToNearestHundred(apexHunterPurse * .035), 1000)

                if (num < 20) specialHarvestPayout = 0

                hEntries < 20 ? specialHarvestPayout = 0 : specialHarvestPayout = Math.max(roundToNearestHundred(apexHunterPurse * .035),250)

       }else {
            specialHarvestPayout = Math.min(roundTwoFidy(apexHunterPurse * .0375), 4000)
            }

       
            
       
        const topTenPayouts = [
            '1st',
            '2nd',
            '3rd',
            '4th',
            '5th',
            '6th',
            '7th',
            '8th',
            '9th',
            '10th'
        ]

        const outsideTopTenPayouts = [
            '20th',
            '30th',
            '40th',
            '50th',
            '60th',
            '70th',
            '80th',
            '90th',
            '100th',
            '110th',
            '120th',
            '130th',
            '140th',
            '150th',
            '160th',
            '170th',
            '180th'
        ]
        
        const specialHarvestPayouts = [
            'spursOver3',
            'spursUnder3',
            'over20Lbs',
            'under20Lbs',
            'beardOver10',
            'beardUnder10'
        ]


        let topPlaces = Math.floor(num / 10)
        if (topPlaces < 3) topPlaces = 3
        if (topPlaces > 10) topPlaces = 10
        // payouts for the top half of the top scoring hunters
        const topHalfPayout = topTenPurse / topPlaces * 1.125
        // payout amount for the bottom half of the top scoring hunters
        const bottomHalfPayout = topTenPurse / topPlaces * .875



        for (let i = 0; i < topPlaces; i++) {
            if (i >= topPlaces / 2) {
                if (num < 50) {
                    payouts[topTenPayouts[i]] = Math.max(roundToNearestFiddy(bottomHalfPayout), 250);
                }
                else if (num < 100 && num > 49) {
                    payouts[topTenPayouts[i]] = Math.max(roundToNearestFiddy(bottomHalfPayout), 250);
                }
                else if (num <= 350) {
                    payouts[topTenPayouts[i]] = Math.max(roundToNearestHundred(bottomHalfPayout), 250);
                } 
                else {
                    payouts[topTenPayouts[i]] = roundTwoFidy(bottomHalfPayout);
                }
            } else {
                if (num < 50) {
                    payouts[topTenPayouts[i]] = Math.max(roundToNearestFiddy(topHalfPayout), 250);
                }
                else if (num < 100 && num > 49) {
                    payouts[topTenPayouts[i]] = Math.max(roundToNearestFiddy(topHalfPayout), 250);
                }
                else if (num <= 350) {
                    payouts[topTenPayouts[i]] = Math.max(roundToNearestHundred(topHalfPayout), 250);
                } else {
                    payouts[topTenPayouts[i]] = roundTwoFidy(topHalfPayout);
                }
            }
        }
        // If Payout Model is 100 or Greater evaluate outside Top Ten Payouts
        if (num > 99){
            let outsideTopTen = Math.floor((num / 100) + 2)
            for (let i = 0; i < outsideTopTen; i++) {
                if (i >= outsideTopTen / 2) {
                    if (num <= 350) {
                        payouts[outsideTopTenPayouts[i]] = 250;
                    }else {
                        payouts[outsideTopTenPayouts[i]] = 500;
                    }
                } else {
                    if (num <= 350) {
                        payouts[outsideTopTenPayouts[i]] = 500;
                    }else {
                        payouts[outsideTopTenPayouts[i]] = 1000;
                    }
                }
            }
        }
        

        for (let category of specialHarvestPayouts) {
            payouts[category] = specialHarvestPayout
        }
        payouts['hunterPayout'] = Object.values(payouts).reduce((a,b) => a+b)
        payouts['grossRevenue'] = hEntries * 125
        payouts['grossMargin'] = payouts['grossRevenue'] - payouts['hunterPayout']
        payouts['marginPercent'] = Math.round(payouts['grossMargin'] / payouts['grossRevenue'] * 100)
        payouts['payoutModel'] = num
        console.log(payouts)

        // Calculated payouts and payout info above in the 'payouts' object
        // Now manipulating html for front end display
        firstPlacePayout.innerText = `$${payouts['1st']}`
        secondPlacePayout.innerText = `$${payouts['2nd']}`
        thirdPlacePayout.innerText = `$${payouts['3rd']}`
        fourthPlacePayout.innerText = `$${payouts['4th']}`
        fifthPlacePayout.innerText = `$${payouts['5th']}`
        sixthPlacePayout.innerText = `$${payouts['6th']}`
        seventhPlacePayout.innerText = `$${payouts['7th']}`
        eighthPlacePayout.innerText = `$${payouts['8th']}`
        ninthPlacePayout.innerText = `$${payouts['9th']}`
        tenthPlacePayout.innerText = `$${payouts['10th']}`

        twentyPlacePayout.innerText = `$${payouts['20th']}`
        thirtyPlacePayout.innerText = `$${payouts['30th']}`
        fortyPlacePayout.innerText = `$${payouts['40th']}`
        fiftyPlacePayout.innerText = `$${payouts['50th']}`
        sixtyPlacePayout.innerText = `$${payouts['60th']}`
        seventyPlacePayout.innerText = `$${payouts['70th']}`
        eightyPlacePayout.innerText = `$${payouts['80th']}`


        // If our Payout Model is 600 or greater we will start appending deep payouts to the UI
        if (num >= 600) {
            // pull all the possible deep payout values from the main 'payouts' object
            const deepPayouts = {
                '90th': payouts['90th'],
                '100th': payouts['100th'],
                '110th': payouts['110th'],
                '120th': payouts['120th'],
                '130th': payouts['130th'],
                '140th': payouts['140th'],
                '150th': payouts['150th'],
                '160th': payouts['160th'],
                '170th': payouts['170th'],
                '180th': payouts['180th'],  
            }
            // if a deep payout has a value other than 0 create and append the proper table row to the DOM
            for (let p of Object.keys(deepPayouts)) {
                if (deepPayouts[p]) {
                    newTr = document.createElement('tr');
                    newTr.id = 'new-payout'
                    newPlaceTd = document.createElement('td');
                    newPlaceTd.innerText = `${p}`;
                    newTr.append(newPlaceTd);

                    newPayoutTd = document.createElement('td');
                    newPayoutTd.innerText = `$500`;
                    newTr.append(newPayoutTd);

                    document.querySelector('#on-the-tens tbody').append(newTr);

                }else continue
            }
        }
    
        overSpursPayout.innerText = `$${payouts['spursOver3']}`
        underSpursPayout.innerText = `$${payouts['spursUnder3']}`
        overTwentyPayout.innerText = `$${payouts['over20Lbs']}`
        underTwentyPayout.innerText = `$${payouts['under20Lbs']}`
        overTenPayout.innerText = `$${payouts['beardOver10']}`
        underTenPayout.innerText = `$${payouts['beardUnder10']}`

        hunterEntries.innerText = `${hEntries}`
        payoutModel.innerText = `${payouts['payoutModel']}`
        grossRevenue.innerText = `$${payouts['grossRevenue']}`
        hunterPayout.innerText = `$${payouts['hunterPayout']}`
        grossMargin.innerText = `$${payouts['grossMargin']} (${payouts['marginPercent']})`

}



// function calcPayout(num){

//     // Round Payout Entries Model to the nearest ten down
//     num -= num % 10;

//     if (num < 60){
//         // Set Minimum Special Harvest Payout to $250
//        let specialHarvestPayout = 0
//        if (roundToNearestHundred(num*4) < 250) {
//             // if (hEntries > 19) specialHarvestPayout = 250
//             specialHarvestPayout = 250
//        } else {specialHarvestPayout = roundToNearestHundred(num*4)}
            
//         // Top Ten Places to loop through and calulate a Payout for depending on the # of Entries
//         // Payout one place for every 10 entries
//         const payoutPlaces = [
//             firstPlacePayout,
//             secondPlacePayout,
//             thirdPlacePayout,
//             fourthPlacePayout,
//             fifthPlacePayout,
//             sixthPlacePayout, 
//             seventhPlacePayout,
//             eighthPlacePayout, 
//             ninthPlacePayout,
//             tenthPlacePayout
//         ]
        
//         let places = Math.floor(num / 10)
//          if (places < 3) places = 3
//         // if (places > 10) places = 10
//         console.log("Places ===",places)
//         console.log(payoutPlaces.slice(0,places))


//         for (let i = 0; i < places; i++) {
//             if (i >= places / 2) {
//                 if (roundToNearestHundred(num*12.5) < 250) payoutPlaces[i].innerText = `$250`
//                 else payoutPlaces[i].innerText = `$${roundToNearestHundred(num*12.5)}`;
//             } else {
//                 console.log('payout',roundToNearestHundred(num*15))
//                 if (roundToNearestHundred(num*15) < 250) payoutPlaces[i].innerText = `$250`
//                 else payoutPlaces[i].innerText = `$${roundToNearestHundred(num*15)}`;
//             }
            
//         }

//         if (places < 10) {
//             for (let p of payoutPlaces.slice(places)) {
//                 p.innerText = "$0"
//             }
//         }

//         twentyPlacePayout.innerText = `$${0}`; 
//         thirtyPlacePayout.innerText = `$${0}`; 
//         fortyPlacePayout.innerText = `$${0}`; 
//         fiftyPlacePayout.innerText = `$${0}`; 
//         sixtyPlacePayout.innerText = `$${0}`;
//         seventyPlacePayout.innerText = `$${0}`;
//         eightyPlacePayout.innerText = `$${0}`; 
//         ninetyPlacePayout.innerText = `$${0}`; 
//         hundredPlacePayout.innerText = `$${0}`;      

//         overSpursPayout.innerText = `$${specialHarvestPayout}`; 
//         underSpursPayout.innerText = `$${specialHarvestPayout}`;
//         OverTwentyPayout.innerText = `$${specialHarvestPayout}`; 
//         underTwentyPayout.innerText = `$${specialHarvestPayout}`;
//         overTenPayout.innerText = `$${specialHarvestPayout}`;
//         underTenPayout.innerText = `$${specialHarvestPayout}`;
//     }
//     else if (num < 70){
//         // Set Minimum Special Harvest Payout to $250
//         let specialHarvestPayout = 0
//         if (roundToNearestHundred(num*4) < 250) {
//             specialHarvestPayout = 250
//         } else {specialHarvestPayout = roundToNearestHundred(num*4)}
            
//         // Top Ten Places to loop through and calulate a Payout for depending on the # of Entries
//         // Payout one place for every 10 entries
//         const payoutPlaces = [
//             firstPlacePayout,
//             secondPlacePayout,
//             thirdPlacePayout,
//             fourthPlacePayout,
//             fifthPlacePayout,
//             sixthPlacePayout, 
//             seventhPlacePayout,
//             eighthPlacePayout, 
//             ninthPlacePayout,
//             tenthPlacePayout
//         ]
        
//         let places = Math.floor(num / 10)
//          if (places < 3) places = 3
//         // if (places > 10) places = 10
//         console.log("Places ===",places)
//         console.log(payoutPlaces.slice(0,places))


//         for (let i = 0; i < places; i++) {
//             if (i >= places / 2) {
//                 if (roundToNearestHundred(num*12.5) < 250) payoutPlaces[i].innerText = `$250`
//                 else payoutPlaces[i].innerText = `$${roundToNearestHundred(num*10)}`;
//             } else {
//                 console.log('payout',roundToNearestHundred(num*15))
//                 if (roundToNearestHundred(num*15) < 250) payoutPlaces[i].innerText = `$250`
//                 else payoutPlaces[i].innerText = `$${roundToNearestHundred(num*12)}`;
//             }
            
//         }

//         if (places < 10) {
//             for (let p of payoutPlaces.slice(places)) {
//                 p.innerText = "$0"
//             }
//         }

//         twentyPlacePayout.innerText = `$${0}`; 
//         thirtyPlacePayout.innerText = `$${0}`; 
//         fortyPlacePayout.innerText = `$${0}`; 
//         fiftyPlacePayout.innerText = `$${0}`; 
//         sixtyPlacePayout.innerText = `$${0}`;
//         seventyPlacePayout.innerText = `$${0}`;
//         eightyPlacePayout.innerText = `$${0}`; 
//         ninetyPlacePayout.innerText = `$${0}`; 
//         hundredPlacePayout.innerText = `$${0}`;      

//         overSpursPayout.innerText = `$${specialHarvestPayout}`; 
//         underSpursPayout.innerText = `$${specialHarvestPayout}`;
//         OverTwentyPayout.innerText = `$${specialHarvestPayout}`; 
//         underTwentyPayout.innerText = `$${specialHarvestPayout}`;
//         overTenPayout.innerText = `$${specialHarvestPayout}`;
//         underTenPayout.innerText = `$${specialHarvestPayout}`;
//     }
//     else if (num < 80){
//         // Set Minimum Special Harvest Payout to $250
//         let specialHarvestPayout = 0
//         if (roundToNearestHundred(num*4) < 250) {
//             specialHarvestPayout = 250
//         } else {specialHarvestPayout = roundToNearestHundred(num*4)}
            
//         // Top Ten Places to loop through and calulate a Payout for depending on the # of Entries
//         // Payout one place for every 10 entries
//         const payoutPlaces = [
//             firstPlacePayout,
//             secondPlacePayout,
//             thirdPlacePayout,
//             fourthPlacePayout,
//             fifthPlacePayout,
//             sixthPlacePayout, 
//             seventhPlacePayout,
//             eighthPlacePayout, 
//             ninthPlacePayout,
//             tenthPlacePayout
//         ]
        
//         let places = Math.floor(num / 10)
//          if (places < 3) places = 3
//         // if (places > 10) places = 10
//         console.log("Places ===",places)
//         console.log(payoutPlaces.slice(0,places))


//         for (let i = 0; i < places; i++) {
//             if (i >= places / 2) {
//                 if (roundToNearestHundred(num*12.5) < 250) payoutPlaces[i].innerText = `$250`
//                 else payoutPlaces[i].innerText = `$${roundToNearestHundred(num*9)}`;
//             } else {
//                 console.log('payout',roundToNearestHundred(num*15))
//                 if (roundToNearestHundred(num*15) < 250) payoutPlaces[i].innerText = `$250`
//                 else payoutPlaces[i].innerText = `$${roundToNearestHundred(num*11)}`;
//             }
            
//         }

//         if (places < 10) {
//             for (let p of payoutPlaces.slice(places)) {
//                 p.innerText = "$0"
//             }
//         }

//         twentyPlacePayout.innerText = `$${0}`; 
//         thirtyPlacePayout.innerText = `$${0}`; 
//         fortyPlacePayout.innerText = `$${0}`; 
//         fiftyPlacePayout.innerText = `$${0}`; 
//         sixtyPlacePayout.innerText = `$${0}`;
//         seventyPlacePayout.innerText = `$${0}`;
//         eightyPlacePayout.innerText = `$${0}`; 
//         ninetyPlacePayout.innerText = `$${0}`; 
//         hundredPlacePayout.innerText = `$${0}`;      

//         overSpursPayout.innerText = `$${specialHarvestPayout}`; 
//         underSpursPayout.innerText = `$${specialHarvestPayout}`;
//         OverTwentyPayout.innerText = `$${specialHarvestPayout}`; 
//         underTwentyPayout.innerText = `$${specialHarvestPayout}`;
//         overTenPayout.innerText = `$${specialHarvestPayout}`;
//         underTenPayout.innerText = `$${specialHarvestPayout}`;
//     }
//     else if (num < 100){
//         // Set Minimum Special Harvest Payout to $250
//         let specialHarvestPayout = 0
//         if (roundToNearestHundred(num*4) < 250) {
//             specialHarvestPayout = 250
//         } else {specialHarvestPayout = roundToNearestHundred(num*4)}
            
//         // Top Ten Places to loop through and calulate a Payout for depending on the # of Entries
//         // Payout one place for every 10 entries
//         const payoutPlaces = [
//             firstPlacePayout,
//             secondPlacePayout,
//             thirdPlacePayout,
//             fourthPlacePayout,
//             fifthPlacePayout,
//             sixthPlacePayout, 
//             seventhPlacePayout,
//             eighthPlacePayout, 
//             ninthPlacePayout,
//             tenthPlacePayout
//         ]
        
//         let places = Math.floor(num / 10)
//          if (places < 3) places = 3
//         // if (places > 10) places = 10
//         console.log("Places ===",places)
//         console.log(payoutPlaces.slice(0,places))


//         for (let i = 0; i < places; i++) {
//             if (i >= places / 2) {
//                 if (roundToNearestHundred(num*12.5) < 250) payoutPlaces[i].innerText = `$250`
//                 else payoutPlaces[i].innerText = `$${roundToNearestHundred(num*7.5)}`;
//             } else {
//                 console.log('payout',roundToNearestHundred(num*15))
//                 if (roundToNearestHundred(num*15) < 250) payoutPlaces[i].innerText = `$250`
//                 else payoutPlaces[i].innerText = `$${roundToNearestHundred(num*9.5)}`;
//             }
            
//         }

//         if (places < 10) {
//             for (let p of payoutPlaces.slice(places)) {
//                 p.innerText = "$0"
//             }
//         }

//         twentyPlacePayout.innerText = `$${0}`; 
//         thirtyPlacePayout.innerText = `$${0}`; 
//         fortyPlacePayout.innerText = `$${0}`; 
//         fiftyPlacePayout.innerText = `$${0}`; 
//         sixtyPlacePayout.innerText = `$${0}`;
//         seventyPlacePayout.innerText = `$${0}`;
//         eightyPlacePayout.innerText = `$${0}`; 
//         ninetyPlacePayout.innerText = `$${0}`; 
//         hundredPlacePayout.innerText = `$${0}`;      

//         overSpursPayout.innerText = `$${specialHarvestPayout}`; 
//         underSpursPayout.innerText = `$${specialHarvestPayout}`;
//         OverTwentyPayout.innerText = `$${specialHarvestPayout}`; 
//         underTwentyPayout.innerText = `$${specialHarvestPayout}`;
//         overTenPayout.innerText = `$${specialHarvestPayout}`;
//         underTenPayout.innerText = `$${specialHarvestPayout}`;
//     }
//     else if (num < 150 && num >= 100){
//         // Set Minimum Special Harvest Payout to $250
//        let specialHarvestPayout = 0
//         if (num*4 < 250) {
//             specialHarvestPayout = 250
            
//         } else specialHarvestPayout = roundToNearestHundred(num*4)
//         // Top Ten Places to loop through and calulate a Payout for depending on the # of Entries
//         // Payout one place for every 10 entries
//         const payoutPlaces = [
//             firstPlacePayout,
//             secondPlacePayout,
//             thirdPlacePayout,
//             fourthPlacePayout,
//             fifthPlacePayout,
//             sixthPlacePayout, 
//             seventhPlacePayout,
//             eighthPlacePayout, 
//             ninthPlacePayout,
//             tenthPlacePayout
//         ]
        
//         let places = Math.floor(num / 10)
//         if (places > 10) places = 10
//         console.log("Places ===",places)
//         console.log(payoutPlaces.slice(0,places))


//         for (let i = 0; i < places; i++) {
//             if (i >= places / 2) {
//                 console.log(`i=${i} places=${places} `)
//                 console.log(payoutPlaces[i])
//                 payoutPlaces[i].innerText = `$${roundToNearestHundred(num*6.5)}`;
//             } else {
//                 console.log(payoutPlaces[i])
//                 payoutPlaces[i].innerText = `$${roundToNearestHundred(num*8)}`;
//             }
            
//         }

//         if (places < 10) {
//             for (let p of payoutPlaces.slice(places)) {
//                 p.innerText = "$0"
//             }
//         }

//         twentyPlacePayout.innerText = `$${0}`; 
//         thirtyPlacePayout.innerText = `$${0}`; 
//         fortyPlacePayout.innerText = `$${0}`; 
//         fiftyPlacePayout.innerText = `$${0}`; 
//         sixtyPlacePayout.innerText = `$${0}`;
//         seventyPlacePayout.innerText = `$${0}`;
//         eightyPlacePayout.innerText = `$${0}`; 
//         ninetyPlacePayout.innerText = `$${0}`; 
//         hundredPlacePayout.innerText = `$${0}`;      

//         overSpursPayout.innerText = `$${specialHarvestPayout}`; 
//         underSpursPayout.innerText = `$${specialHarvestPayout}`;
//         OverTwentyPayout.innerText = `$${specialHarvestPayout}`; 
//         underTwentyPayout.innerText = `$${specialHarvestPayout}`;
//         overTenPayout.innerText = `$${specialHarvestPayout}`;
//         underTenPayout.innerText = `$${specialHarvestPayout}`;
//     }
//     else if (num < 150){
//        let specialHarvestPayout = 0
//         if (num*4 < 250) {
//             specialHarvestPayout = 250
//             console.log(specialHarvestPayout)
//         } else specialHarvestPayout = roundToNearestHundred(num*4)

//         twentyPlacePayout.innerText = `$${0}`; 
//         thirtyPlacePayout.innerText = `$${0}`; 
//         fortyPlacePayout.innerText = `$${0}`; 
//         fiftyPlacePayout.innerText = `$${0}`; 
//         sixtyPlacePayout.innerText = `$${0}`;
//         seventyPlacePayout.innerText = `$${0}`;
//         eightyPlacePayout.innerText = `$${0}`; 
//         ninetyPlacePayout.innerText = `$${0}`; 
//         hundredPlacePayout.innerText = `$${0}`;      

//         overSpursPayout.innerText = `$${specialHarvestPayout}`; 
//         underSpursPayout.innerText = `$${specialHarvestPayout}`;
//         OverTwentyPayout.innerText = `$${specialHarvestPayout}`; 
//         underTwentyPayout.innerText = `$${specialHarvestPayout}`;
//         overTenPayout.innerText = `$${specialHarvestPayout}`;
//         underTenPayout.innerText = `$${specialHarvestPayout}`;
//     }
//     else if (num < 250){
//         // num -= num % 50;
//         firstPlacePayout.innerText = `$${roundToNearestHundred(num*6)}`;
//         secondPlacePayout.innerText = `$${roundToNearestHundred(num*6)}`;
//         thirdPlacePayout.innerText = `$${roundToNearestHundred(num*6)}`;
//         fourthPlacePayout.innerText = `$${roundToNearestHundred(num*6)}`;
//         fifthPlacePayout.innerText = `$${roundToNearestHundred(num*6)}`;
//         sixthPlacePayout.innerText = `$${roundToNearestHundred(num*4.5)}`;
//         seventhPlacePayout.innerText = `$${roundToNearestHundred(num*4.5)}`;
//         eighthPlacePayout.innerText = `$${roundToNearestHundred(num*4.5)}`;
//         ninthPlacePayout.innerText = `$${roundToNearestHundred(num*4.5)}`;
//         tenthPlacePayout.innerText = `$${roundToNearestHundred(num*4.5)}`;

//         twentyPlacePayout.innerText = `$${roundToNearestHundred(num*2)}`
//         thirtyPlacePayout.innerText = `$${roundToNearestHundred(num*2)}`; 
//         fortyPlacePayout.innerText = `$${roundToNearestHundred(num*2)}`; 
//         fiftyPlacePayout.innerText = `$${roundToNearestHundred(num*2)}`; 
//         sixtyPlacePayout.innerText = `$${0}`;
//         seventyPlacePayout.innerText = `$${0}`;
//         eightyPlacePayout.innerText = `$${0}`; 
//         ninetyPlacePayout.innerText = `$${0}`; 
//         hundredPlacePayout.innerText = `$${0}`;
       

//         overSpursPayout.innerText = `$${roundToNearestHundred(num*4)}`; 
//         underSpursPayout.innerText = `$${roundToNearestHundred(num*4)}`; 
//         OverTwentyPayout.innerText = `$${roundToNearestHundred(num*4)}`; 
//         underTwentyPayout.innerText = `$${roundToNearestHundred(num*4)}`;
//         overTenPayout.innerText = `$${roundToNearestHundred(num*4)}`;
//         underTenPayout.innerText = `$${roundToNearestHundred(num*4)}`;
//     }
//     else if (num <= 500){
//         firstPlacePayout.innerText = `$${roundToNearestHundred(num*6)}`;
//         secondPlacePayout.innerText = `$${roundToNearestHundred(num*6)}`;
//         thirdPlacePayout.innerText = `$${roundToNearestHundred(num*6)}`;
//         fourthPlacePayout.innerText = `$${roundToNearestHundred(num*6)}`;
//         fifthPlacePayout.innerText = `$${roundToNearestHundred(num*6)}`;
//         sixthPlacePayout.innerText = `$${roundToNearestHundred(num*4.5)}`;
//         seventhPlacePayout.innerText = `$${roundToNearestHundred(num*4.5)}`;
//         eighthPlacePayout.innerText = `$${roundToNearestHundred(num*4.5)}`;
//         ninthPlacePayout.innerText = `$${roundToNearestHundred(num*4.5)}`;
//         tenthPlacePayout.innerText = `$${roundToNearestHundred(num*4.5)}`;

//         twentyPlacePayout.innerText = `$500`; 
//         thirtyPlacePayout.innerText = `$500`; 
//         fortyPlacePayout.innerText = `$500`; 
//         fiftyPlacePayout.innerText = `$500`; 
//         sixtyPlacePayout.innerText = `$500`;
//         seventyPlacePayout.innerText = `$250`;
//         eightyPlacePayout.innerText = `$250`; 
//         ninetyPlacePayout.innerText = `$250`; 
//         hundredPlacePayout.innerText = `$250`;

//         // overSpursPayout.innerText = `$${roundToNearestHundred(num*2.70)}`; 
//         overSpursPayout.innerText = `$${roundToNearestHundred(num*3)}`; 
//         underSpursPayout.innerText = `$${roundToNearestHundred(num*3)}`; 
//         OverTwentyPayout.innerText = `$${roundToNearestHundred(num*3)}`; 
//         underTwentyPayout.innerText = `$${roundToNearestHundred(num*3)}`;
//         overTenPayout.innerText = `$${roundToNearestHundred(num*3)}`;
//         underTenPayout.innerText = `$${roundToNearestHundred(num*3)}`;
//     }

//     if (num > 500){
//         // if (num > 500 && num < 750) { num = 500 } 
//         // if (num > 750 && num < 1000) { num = 750 } 
//         // if (num > 1000 && num < 1250) { num = 1000 } 
//         // if (num > 1250 && num < 1500) { num = 1250 } 
//         if (num > 500 && num < 625) { num = 500 } 
//         if (num > 625 && num < 750) { num = 625 } 
//         if (num > 750 && num < 875) { num = 750 } 
//         if (num > 875 && num < 1000) { num = 875 } 
//         if (num > 1000 && num < 1125) { num = 1000 } 
//         if (num > 1125 && num < 1250) { num = 1125 } 
//         if (num > 1250 && num < 1375) { num = 1250 } 
//         if (num > 1375 && num < 1500) { num = 1375 } 
//         // if (num > 1250 && num < 1500) { num = 1500 } 
//         // if (num > 500 && num < 750) { num = 500 } 
//         firstPlacePayout.innerText = `$${roundToNearestHundred(num*6)}`;
//         secondPlacePayout.innerText = `$${roundToNearestHundred(num*6)}`;
//         thirdPlacePayout.innerText = `$${roundToNearestHundred(num*6)}`;
//         fourthPlacePayout.innerText = `$${roundToNearestHundred(num*6)}`;
//         fifthPlacePayout.innerText = `$${roundToNearestHundred(num*6)}`;
//         sixthPlacePayout.innerText = `$${roundToNearestHundred(num*4.5)}`;
//         seventhPlacePayout.innerText = `$${roundToNearestHundred(num*4.5)}`;
//         eighthPlacePayout.innerText = `$${roundToNearestHundred(num*4.5)}`;
//         ninthPlacePayout.innerText = `$${roundToNearestHundred(num*4.5)}`;
//         tenthPlacePayout.innerText = `$${roundToNearestHundred(num*4.5)}`;

//         twentyPlacePayout.innerText = `$1000`; 
//         thirtyPlacePayout.innerText = `$1000`; 
//         fortyPlacePayout.innerText = `$1000`; 
//         fiftyPlacePayout.innerText = `$1000`; 
//         sixtyPlacePayout.innerText = `$500`;
//         seventyPlacePayout.innerText = `$500`;
//         eightyPlacePayout.innerText = `$500`; 
//         ninetyPlacePayout.innerText = `$500`; 
//         hundredPlacePayout.innerText = `$500`;

//         // overSpursPayout.innerText = `$${roundToNearestHundred(num*2.70)}`; 
//         overSpursPayout.innerText = `$${roundToNearestHundred(num*3)}`; 
//         underSpursPayout.innerText = `$${roundToNearestHundred(num*3)}`; 
//         OverTwentyPayout.innerText = `$${roundToNearestHundred(num*3)}`; 
//         underTwentyPayout.innerText = `$${roundToNearestHundred(num*3)}`;
//         overTenPayout.innerText = `$${roundToNearestHundred(num*3)}`;
//         underTenPayout.innerText = `$${roundToNearestHundred(num*3)}`;
//     }

//     if(num >= 750){
//         if (num > 750 && num < 1000) { num = 750 } 
//         if (num > 1000 && num < 1250) { num = 1000 } 
//         if (num > 1250 && num < 1500) { num = 1250 } 

//         sixtyPlacePayout.innerText = `$${roundTwoFidy(500*2)}`;

//         newTr = document.createElement('tr');
//         newTr.id = 'new-payout'
//         newPlaceTd = document.createElement('td');
//         newPlaceTd.innerText = '110th';
//         newTr.append(newPlaceTd);

//         newPayoutTd = document.createElement('td');
//         newPayoutTd.innerText = `$500`;
//         newTr.append(newPayoutTd);

//         document.querySelector('#on-the-tens tbody').append(newTr);

//         newTr = document.createElement('tr');
//         newTr.id = 'new-payout'
//         newPlaceTd = document.createElement('td');
//         newPlaceTd.innerText = '120th';
//         newTr.append(newPlaceTd);

//         newPayoutTd = document.createElement('td');
//         newPayoutTd.innerText = `$500`;
//         newTr.append(newPayoutTd);

//         document.querySelector('#on-the-tens tbody').append(newTr);
        
//     }

//     if(num >= 1000){

//         if (num > 1000 && num < 1250) { num = 1000 } 
//         if (num > 1250 && num < 1500) { num = 1250 } 

//         seventyPlacePayout.innerText = `$${500*2}`;

//         newTr = document.createElement('tr');
//         newTr.id = 'new-payout'
//         newPlaceTd = document.createElement('td');
//         newPlaceTd.innerText = '130th';
//         newTr.append(newPlaceTd);

//         newPayoutTd = document.createElement('td');
//         newPayoutTd.innerText = `$500`;
//         newTr.append(newPayoutTd);

//         document.querySelector('#on-the-tens tbody').append(newTr);

//         newTr = document.createElement('tr');
//         newTr.id = 'new-payout'
//         newPlaceTd = document.createElement('td');
//         newPlaceTd.innerText = '140th';
//         newTr.append(newPlaceTd);

//         newPayoutTd = document.createElement('td');
//         newPayoutTd.innerText = `$500`;
//         newTr.append(newPayoutTd);

//         document.querySelector('#on-the-tens tbody').append(newTr);
        
//     }

//     if(num >= 1250){

//         if (num > 1250 && num < 1500) { num = 1250 } 

//         eightyPlacePayout.innerText = `$${(500*2)}`;

//         newTr = document.createElement('tr');
//         newTr.id = 'new-payout'
//         newPlaceTd = document.createElement('td');
//         newPlaceTd.innerText = '150th';
//         newTr.append(newPlaceTd);

//         newPayoutTd = document.createElement('td');
//         newPayoutTd.innerText = `$500`;
//         newTr.append(newPayoutTd);

//         document.querySelector('#on-the-tens tbody').append(newTr);

//         newTr = document.createElement('tr');
//         newTr.id = 'new-payout'
//         newPlaceTd = document.createElement('td');
//         newPlaceTd.innerText = '160th';
//         newTr.append(newPlaceTd);

//         newPayoutTd = document.createElement('td');
//         newPayoutTd.innerText = `$500`;
//         newTr.append(newPayoutTd);

//         document.querySelector('#on-the-tens tbody').append(newTr);
        
//     }


//     if(num >= 1500){

//         ninetyPlacePayout.innerText = `$1000`;

//         newTr = document.createElement('tr');
//         newTr.id = 'new-payout'
//         newPlaceTd = document.createElement('td');
//         newPlaceTd.innerText = '170th';
//         newTr.append(newPlaceTd);

//         newPayoutTd = document.createElement('td');
//         newPayoutTd.innerText = `$500`;
//         newTr.append(newPayoutTd);

//         document.querySelector('#on-the-tens tbody').append(newTr);

//         newTr = document.createElement('tr');
//         newTr.id = 'new-payout'
//         newPlaceTd = document.createElement('td');
//         newPlaceTd.innerText = '180th';
//         newTr.append(newPlaceTd);

//         newPayoutTd = document.createElement('td');
//         newPayoutTd.innerText = `$500`;
//         newTr.append(newPayoutTd);

//         document.querySelector('#on-the-tens tbody').append(newTr);
        
//     }


    // if(num >= 1750){

    //     hundredPlacePayout.innerText = `$${500*2}`;

    //     newTr = document.createElement('tr');
    //     newTr.id = 'new-payout'
    //     newPlaceTd = document.createElement('td');
    //     newPlaceTd.innerText = '190th';
    //     newTr.append(newPlaceTd);

    //     newPayoutTd = document.createElement('td');
    //     newPayoutTd.innerText = '$500';
    //     newTr.append(newPayoutTd);

    //     document.querySelector('#on-the-tens tbody').append(newTr);

    //     newTr = document.createElement('tr');
    //     newTr.id = 'new-payout'
    //     newPlaceTd = document.createElement('td');
    //     newPlaceTd.innerText = '200th';
    //     newTr.append(newPlaceTd);

    //     newPayoutTd = document.createElement('td');
    //     newPayoutTd.innerText = '$500';
    //     newTr.append(newPayoutTd);

    //     document.querySelector('#on-the-tens tbody').append(newTr);
        
    // }


// }