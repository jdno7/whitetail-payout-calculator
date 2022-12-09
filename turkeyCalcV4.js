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

const entriesForm = document.querySelector('form');

// Master Payouts Object to update with new calculations and reference for UI / DOM manipulation
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

// Set default hunter entries value and calculate 
let hEntries = 500;
calcNewPayout(hEntries)
// Event listener for now Hunter Entries submissions
entriesForm.addEventListener('submit', function(e){
    console.log('submit')
    e.preventDefault();

        hEntries = document.querySelector('input[id ="hunter-entries"]').value;
//    If there were additional 'deep payouts' added to the DOM 
// remove them prior to a new payout calculation
   if (document.querySelectorAll('#new-payout')){
        let oldPayouts = (document.querySelectorAll('#new-payout'));
        oldPayouts.forEach(payout => payout.remove());
}
     
    calcNewPayout(hEntries);

})

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

    // ************************Algorithm Rules*********************************

        // Hunter Payout starts at (Gross Revenue * .65) Prior to Rounding individual places

        // Apex Margin starts at (Gross Revenue * .35) Prior to rounding individual places

        // Payout Models:
            // Under 400 Total Entries:
                // Round down to the nearest 10
            // Over 400 Total Entries:
                // Round down to the Nearest 50
                
        // Top Scoring Payouts:
            //  Less Than 100 entries add a place to the payout for every 10 hunters with a minimum of 3 payouts
                // Examples: 
                    // 20 entries = top 3 scores would be paid 
                    // 67 Entries = Top 6 Scores would be paid

            //  Top Ten Payout Purse = Hunter Payout * .74

            // Top Half of the Top Payouts = Top Ten Purse / number of Payouts * 1.125

            // Bottom Half of the Top Payouts = Top Ten Purse / number of Payouts * .875
                // Examples:
                    // 56 Entries = 5 Payouts 
                        // 1st - 2nd - 3rd = Top Ten Purse / number of Payouts * 1.125
                        // 4th - 5th = Top Ten Purse / number of Payouts * .875

                    // 86 Entries = 8 Payouts 
                        // 1st - 2nd - 3rd - 4th = Top Ten Purse / number of Payouts * 1.125
                        // 5th - 6th - 7th - 8th = Top Ten Purse / number of Payouts * .875

                    // 100+ Entries = 10 Payouts 
                        // 1st - 2nd - 3rd - 4th - 5th = (Top Ten Purse / number of Payouts * 1.125)
                        // 5th - 6th - 7th - 8th - 9th - 10th = (Top Ten Purse / number of Payouts * .875)

            // Rounding Top Payouts:
                // Down to nearest $250 - payout Model 350 Entries and above 
                // Down to nearest $100 - payout Model Less than 350 Entries and above 100 Entries 
                // Down to nearest $50 - payout Model Less than 100 entries 

        // Outside Top Ten Payouts:
            // (1 Payout + 2 Payouts) are added to every 10th spot outside the top ten (starting with 20th) for Every 100 Places 
                // Examples:
                    // 0 Payouts outside the top ten less than 100 entries

                    // 1 Payout outside the top ten (20th) for 100 entries + 2 additional Payouts (30th and 40th)
                    
                    // 5 Payouts outside the top ten (20th, 30th, 40th, 50th) for 560 entries + 2 additional Payouts (60th and 70th)

            // Top half of Outside Top Ten Payouts are $1000 350 enties and up *** $500 349 entries and down 
                
            // Bottom half of Outside Top Ten Payouts are $500 350 enties and up *** $250 349 entries and down 

                // Examples: 
                    // 323 Entries = (20th, 30th, 40th = $500) (50th, 60th = $250) 
                        
                    // 1250 Entries = (20th, 30th, 40th, 50th, 60th, 80th = $1000) (90th, 100th, 110th, 120th, 130th, 140th, 150th = $500) 
        
        // Special Harvest Payouts:
            // Hunter Payout Purse * .035
            // Maximum of $4000
            // Minimum of $250
            // No Special Harvest Payouts Less than 20 Entries
            // Rounding Special Harves Payouts:
                // Less than 200 Entries Round down to the nearest 100
                // More than 200 Entries Round down to the nearest 250

    // ************************END Algorithm Rules*********************************************





        // Round the Payout Model either down nearest 10 or 50
        num < 400 ? num -= num % 10 : num -= num % 50;
        
        // clear previous payout model
        for (let p of Object.keys(payouts)) {
            payouts[p] = 0
        }

    //    desired hunter purse to dispearse prior to rounding
       let apexHunterPurse = (num * 125) * .65

    // If Entries are less than 20, the top Ten Purse gets all of the apexHunter Purse 
       let topTenPurse = 0  
        if (num > 19){
            topTenPurse += apexHunterPurse * .74
        }else {
            apexHunterPurse = num * 125
            topTenPurse += apexHunterPurse
        }
   
       let specialHarvestPayout = 0
       if (num < 400) {
                if (num > 200) specialHarvestPayout = Math.max(roundToNearestHundred(apexHunterPurse * .035), 1000)

                if (num < 20) specialHarvestPayout = 0

                num < 40 ? specialHarvestPayout = 0 : specialHarvestPayout = Math.max(roundToNearestHundred(apexHunterPurse * .035),250)

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

        // Calculating the TOP PLACE PAYOUTS
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
                    payouts[topTenPayouts[i]] = Math.min(roundTwoFidy(bottomHalfPayout), 7500);
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
        
        // Apply Special Harvest Payouts to the 'payouts' object
        for (let category of specialHarvestPayouts) {
            payouts[category] = specialHarvestPayout
        }
        // Sum up all payouts in the 'payouts' object and calculate other payout info
        payouts['hunterPayout'] = Object.values(payouts).reduce((a,b) => a+b)
        payouts['grossRevenue'] = hEntries * 125
        payouts['grossMargin'] = payouts['grossRevenue'] - payouts['hunterPayout']
        payouts['marginPercent'] = Math.round(payouts['grossMargin'] / payouts['grossRevenue'] * 100)
        payouts['payoutModel'] = num
        console.log(payouts)

        // Now manipulating html for front end display for the default 500 entry model
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


        // If our Payout Model is 600 or greater start appending deep payouts to the DOM
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
        // Apply special harvest payouts to the DOM
        overSpursPayout.innerText = `$${payouts['spursOver3']}`
        underSpursPayout.innerText = `$${payouts['spursUnder3']}`
        overTwentyPayout.innerText = `$${payouts['over20Lbs']}`
        underTwentyPayout.innerText = `$${payouts['under20Lbs']}`
        overTenPayout.innerText = `$${payouts['beardOver10']}`
        underTenPayout.innerText = `$${payouts['beardUnder10']}`
        // Apply Payout info to the DOM
        hunterEntries.innerText = `${hEntries}`
        payoutModel.innerText = `${payouts['payoutModel']}`
        grossRevenue.innerText = `$${payouts['grossRevenue']}`
        hunterPayout.innerText = `$${payouts['hunterPayout']}`
        grossMargin.innerText = `$${payouts['grossMargin']} (${payouts['marginPercent']}%)`

}