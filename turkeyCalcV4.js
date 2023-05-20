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

const firstFivePayout = document.querySelector('#outside-top-ten tr td:nth-child(2)')
const firstFive = document.getElementById('11th-15th')
const secondFivePayout = document.querySelector('#outside-top-ten tr td:nth-child(2)')
const secondFive = document.getElementById('16th-20th')
const thirdFivePayout = document.querySelector('#outside-top-ten tr:nth-child(2) td:nth-child(2)')
const thirdFive = document.getElementById('21st-25th')
const fourthFivePayout = document.querySelector('#outside-top-ten tr:nth-child(3) td:nth-child(2)')
const fourthFive = document.getElementById('26th-30th')
const fifthFivePayout = document.querySelector('#outside-top-ten tr:nth-child(4) td:nth-child(2)')
const fifthFive = document.getElementById('31st-35th')
const sixthFivePayout = document.querySelector('#outside-top-ten tr:nth-child(5) td:nth-child(2)')
const sixthFive = document.getElementById('36th-40th')
const seventhFivePayout = document.querySelector('#outside-top-ten tr:nth-child(6) td:nth-child(2)')
const seventhFive = document.getElementById('41st-45th')
const eighthFivePayout = document.querySelector('#outside-top-ten tr:nth-child(7) td:nth-child(2)')
const eighthFive = document.getElementById('46th-50th')
const ninthFivePayout = document.querySelector('#outside-top-ten tr:nth-child(8) td:nth-child(2)')
const ninthFive = document.getElementById('51st-55th')
const tenthFivePayout = document.querySelector('#outside-top-ten tr:nth-child(9) td:nth-child(2)')
const tenthFive = document.getElementById('56th-60th')
const eleventhFivePayout = document.querySelector('#outside-top-ten tr:nth-child(10) td:nth-child(2)')
const eleventhFive = document.getElementById('61st-65th')
const twelvethFivePayout = document.querySelector('#outside-top-ten tr:nth-child(11) td:nth-child(2)')
const twelvethFive = document.getElementById('66th-70th')
const lastFivePayout = document.querySelector('#outside-top-ten tr:nth-child(12) td:nth-child(2)')
const lastFive = document.getElementById('71st-75th')

const tenPointPayout = document.querySelector('#special-harvest tr td:nth-child(2)')
const ninePointPayout = document.querySelector('#special-harvest tr:nth-child(2) td:nth-child(2)')
const eightPointPayout = document.querySelector('#special-harvest tr:nth-child(3) td:nth-child(2)')
const sevenPointPayout = document.querySelector('#special-harvest tr:nth-child(4) td:nth-child(2)')
const hundredthPayout = document.querySelector('#special-harvest tr:nth-child(5) td:nth-child(2)')
const twoHundredthPayout = document.querySelector('#special-harvest tr:nth-child(6) td:nth-child(2)')
const threeHundredthPayout = document.querySelector('#special-harvest tr:nth-child(7) td:nth-child(2)')
const fourHundredthPayout = document.querySelector('#special-harvest tr:nth-child(8) td:nth-child(2)')
const fiveHundredthPayout = document.querySelector('#special-harvest tr:nth-child(9) td:nth-child(2)')
const sevenFidyPayout = document.querySelector('#special-harvest tr:nth-child(10) td:nth-child(2)')
const thousandthPayout = document.querySelector('#special-harvest tr:nth-child(11) td:nth-child(2)')
const twelvehunnaFidyPayout = document.querySelector('#special-harvest tr:nth-child(12) td:nth-child(2)')

const hunterEntries = document.querySelector('#payout-nums tr td:nth-child(1)');
const payoutModel = document.querySelector('#payout-nums tr td:nth-child(2)');
const grossRevenue = document.querySelector('#payout-nums tr:nth-child(4) td:nth-child(1)');
const hunterPayout = document.querySelector('#payout-nums tr:nth-child(4) td:nth-child(2)');
const grossMargin = document.getElementById('gross-margin')

const entriesForm = document.querySelector('#hunter-entries');
const entryFeeForm = document.querySelector('#entry-fee');

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
    '11th-15th': 0,
    '16th-20th': 0,
    '21st-25th': 0,
    '26th-30th': 0,
    '31st-35th': 0,
    '36th-40th': 0,
    '41st-45th': 0,
    '46th-50th': 0,
    '51st-55th': 0,
    '56th-60th': 0,
    '61st-65th': 0,
    '66th-70th': 0,
    '10PT Drawing': 0,
    '9PT Drawing': 0,
    '8PT Drawing': 0,
    '7PT Drawing': 0,
    '100th': 0,
    '200th': 0,
    '300th': 0,
    '400th': 0,
    '500th' : 0,
    '750th' : 0,
    '1000th' : 0,
    '1250th' : 0,
}

// Set default hunter entries value and calculate 
let hEntries = 500;
// Set default entry fee value and calculate 
let entryFee = 125;
calcNewPayout(hEntries, entryFee)
// Event listener for new Hunter Entries submissions
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
     
    calcNewPayout(hEntries, entryFee);

})

entryFeeForm.addEventListener('submit', function(e){
    e.preventDefault()

    entryFee = document.querySelector('input[id ="entry-fee"]').value;
    hEntries = document.querySelector('input[id ="hunter-entries"]').value;
    !hEntries? hEntries=500 : undefined 

    if (document.querySelectorAll('#new-payout')){
        let oldPayouts = (document.querySelectorAll('#new-payout'));
        oldPayouts.forEach(payout => payout.remove());
    }

    calcNewPayout(hEntries, entryFee)
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

function calcNewPayout(num, entryFee) {

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
       let apexHunterPurse = (num * entryFee) * .65
        console.log("Entry Fee===", entryFee)
        console.log("apexHunterPurse===", apexHunterPurse)
        console.log("payouts===", payouts)
    // If Entries are less than 20, the top Ten Purse gets all of the apexHunter Purse 
       let topTenPurse = 0  
        if (num > 19){
            topTenPurse += apexHunterPurse * .45
        }else {
            apexHunterPurse = num * entryFee
            topTenPurse += apexHunterPurse
        }
   
       let specialHarvestPayout = 0
       if (num < 400) {
                if (num > 200) specialHarvestPayout = Math.max(roundToNearestHundred(apexHunterPurse * .025), entryFee*8)

                if (num < 20) specialHarvestPayout = 0

                num < 40 ? specialHarvestPayout = 0 : specialHarvestPayout = Math.max(roundToNearestHundred(apexHunterPurse * .025),entryFee*2)

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
            '11th=15th',
            '16th-20th',
            '21st-25th',
            '26th-30th',
            '31st-35th',
            '36th-40th',
            '41st-45th',
            '46th-50th',
            '51st-55th',
            '56th-60th',
            '61st-65th',
            '66th-70th',
            '71st-75th'
        ]
        
        const specialHarvestPayouts = [
            '10PT Drawing',
            '9PT Drawing',
            '8PT Drawing',
            '7PT Drawing',
            '100th',
            '200th',
            '300th',
            '400th',
            '500th',
            '750th',
            '1000th',
            '1250th',
        ]

        // Calculating the TOP PLACE PAYOUTS
        let topPlaces = Math.floor(num / 10)
        if (topPlaces < 3) topPlaces = 3
        if (topPlaces > 10) topPlaces = 10
        // payouts for the top half of the top scoring hunters
        // const topHalfPayout = topTenPurse / topPlaces * 1.125
        // payout amount for the bottom half of the top scoring hunters
        // const bottomHalfPayout = topTenPurse / topPlaces * .875

        // Top Places templates based on payouts and assign payouts accordingly
        
            if (topPlaces === 10) {
                payouts["1st"] = Math.max(roundTwoFidy(topTenPurse * .26), entryFee * 2)
                payouts["2nd"] = Math.max(roundTwoFidy(topTenPurse * .20), entryFee * 2)
                payouts["3rd"] = Math.max(roundTwoFidy(topTenPurse * .15), entryFee * 2)
                payouts["4th"] = Math.max(roundTwoFidy(topTenPurse * .10), entryFee * 2)
                payouts["5th"] = Math.max(roundTwoFidy(topTenPurse * .052), entryFee * 2)
                payouts["6th"] = Math.max(roundTwoFidy(topTenPurse * .048), entryFee * 2)
                payouts["7th"] = Math.max(roundTwoFidy(topTenPurse * .045), entryFee * 2)
                payouts["8th"] = Math.max(roundTwoFidy(topTenPurse * .043), entryFee * 2)
                payouts["9th"] = Math.max(roundTwoFidy(topTenPurse * .042), entryFee * 2)
                payouts["10th"] = Math.max(roundTwoFidy(topTenPurse * .04), entryFee * 2)
            }
        


// Old Turkey Logic
        // for (let i = 0; i < topPlaces; i++) {
        //     if (i >= topPlaces / 2) {
        //         if (num < 50) {
        //             payouts[topTenPayouts[i]] = Math.max(roundToNearestFiddy(bottomHalfPayout), entryFee*2);
        //         }
        //         else if (num < 100 && num > 49) {
        //             payouts[topTenPayouts[i]] = Math.max(roundToNearestFiddy(bottomHalfPayout), entryFee*2);
        //         }
        //         else if (num <= 350) {
        //             payouts[topTenPayouts[i]] = Math.max(roundToNearestHundred(bottomHalfPayout), entryFee*2);
        //         } 
        //         else {
        //             payouts[topTenPayouts[i]] = Math.min(roundTwoFidy(bottomHalfPayout), 7500);
        //         }
        //     } else {
        //         if (num < 50) {
        //             payouts[topTenPayouts[i]] = Math.max(roundToNearestFiddy(topHalfPayout), entryFee*2);
        //         }
        //         else if (num < 100 && num > 49) {
        //             payouts[topTenPayouts[i]] = Math.max(roundToNearestFiddy(topHalfPayout), entryFee*2);
        //         }
        //         else if (num <= 350) {
        //             payouts[topTenPayouts[i]] = Math.max(roundToNearestHundred(topHalfPayout), entryFee*2);
        //         } else {
        //             payouts[topTenPayouts[i]] = roundTwoFidy(topHalfPayout);
        //         }
        //     }
        // }
        // If Payout Model is 100 or Greater evaluate outside Top Ten Payouts
        if (num > 99){
            let outsideTopTen = Math.floor((num / 100))
            for (let i = 0; i < outsideTopTen; i++) {
                // for every set of places other than 11th-15th remove $125 from the product of num(entries)* .6 with the minumum value at $250
                payouts[outsideTopTenPayouts[i+1]] = Math.min((num * .6) - (i * 125), 250)
            }
            // Deep payouts go over 180th and add money to the payout numbers and Im too lazy to fix it
            payouts.undefined? delete payouts.undefined : undefined
        }
        
        // Special Harvest Payouts
        if (num > 100) {
            payouts["10PT Drawing"] = num * 6
            payouts["9PT Drawing"] = num * 6
            payouts["8PT Drawing"] = num * 4
            payouts["7PT Drawing"] = num * 4
        }

        if (num >= 200) {
            payouts["100th"] = Math.min(num * 2, 3000)
        }
        if (num >= 300) {
            payouts["200th"] = Math.min(num * 2, 3000)
        }
        if (num >= 400) {
            payouts["300th"] = Math.min(num * 1, 1500)
        }
        if (num >= 500) {
            payouts["400th"] = Math.min(num * 1, 1500)
        }
        if (num >= 600) {
            payouts["500th"] = Math.min(num * 1, 1500)
        }
        if (num >= 1000) {
            payouts["750th"] = Math.min(num * 1, 1500)
        }
        if (num >= 1250) {
            payouts["750th"] = Math.min(num * 1, 1500)
        }
        if (num >= 1500) {
            payouts["1000th"] = Math.min(num * 1, 1500)
        }
        if (num >= 1750) {
            payouts["1250th"] = Math.min(num * 1, 1500)
        }

        // Sum up all payouts in the 'payouts' object and calculate other payout info
        payouts['hunterPayout'] = Object.values(payouts).reduce((a,b) => a+b)
        payouts['grossRevenue'] = hEntries * entryFee
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

        firstFivePayout.innerText = `$${payouts['11th-15th']}`                               
        secondFivePayout.innerText = `$${payouts['16th-20th']}`
        thirdFivePayout.innerText = `$${payouts['21st-25th']}`
        fourthFivePayout.innerText = `$${payouts['26th-30th']}`
        fifthFivePayout.innerText = `$${payouts['31st-35th']}`
        sixthFivePayout.innerText = `$${payouts['36th-40th']}`
        seventhFivePayout.innerText = `$${payouts['41st-45th']}`
        eighthFivePayout.innerText = `$${payouts['46th-50th']}`
        ninthFivePayout.innerText = `$${payouts['51st-55th']}`
        tenthFivePayout.innerText = `$${payouts['56th-60th']}`
        eleventhFivePayout.innerText = `$${payouts['61st-65th']}`
        twelvethFivePayout.innerText = `$${payouts['66th-70th']}`
        lastFivePayout.innerText = `$${payouts['71st-75th']}`


        // If our Payout Model is 600 or greater start appending deep payouts to the DOM
        // if (num >= 600) {

        //     // pull all the possible deep payout values from the main 'payouts' object
        //     const deepPayouts = {
        //         '36th-40th': payouts['36th-40th'],
        //         '41st-45th': payouts['41st-45th'],
        //         '46th-50th': payouts['46th-50th'],
        //         '51st-55th': payouts['51st-55th'],
        //         '56th-60th': payouts['56th-60th'],
        //         '61st-65th': payouts['61st-65th'],
        //         '66th-70th': payouts['66th-70th'],
        //     }
        //     // if a deep payout has a value other than 0 create and append the proper table row to the DOM
        //     for (let p of Object.keys(deepPayouts)) {
        //         if (deepPayouts[p]) {
        //             newTr = document.createElement('tr');
        //             newTr.id = 'new-payout'
        //             newPlaceTd = document.createElement('td');
        //             newPlaceTd.innerText = `${p}`;
        //             newTr.append(newPlaceTd);

        //             newPayoutTd = document.createElement('td');
        //             newPayoutTd.innerText = `$${payouts[p]}`;
        //             // newPayoutTd.innerText = `$${500}`;
        //             newTr.append(newPayoutTd);

        //             document.querySelector('#on-the-tens tbody').append(newTr);

        //         }else continue
        //     }
        // }
        // Apply special harvest payouts to the DOM
        tenPointPayout.innerText = `$${payouts['10PT Drawing']}`
        ninePointPayout.innerText = `$${payouts['9PT Drawing']}`
        eightPointPayout.innerText = `$${payouts['8PT Drawing']}`
        sevenPointPayout.innerText = `$${payouts['7PT Drawing']}`
        hundredthPayout.innerText = `$${payouts['100th']}`
        twoHundredthPayout.innerText = `$${payouts['200th']}`
        threeHundredthPayout.innerText = `$${payouts['300th']}`
        fourHundredthPayout.innerText = `$${payouts['400th']}`
        fiveHundredthPayout.innerText = `$${payouts['500th']}`
        sevenFidyPayout.innerText = `$${payouts['750th']}`
        thousandthPayout.innerText = `$${payouts['1000th']}`
        twelvehunnaFidyPayout.innerText = `$${payouts['1250th']}`
        // Apply Payout info to the DOM
        hunterEntries.innerText = `${hEntries}`
        payoutModel.innerText = `${payouts['payoutModel']}`
        grossRevenue.innerText = `$${payouts['grossRevenue']}`
        hunterPayout.innerText = `$${payouts['hunterPayout']}`
        grossMargin.innerText = `$${payouts['grossMargin']} (${payouts['marginPercent']}%)`

}