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
const OverTwentyPayout = document.querySelector('#special-harvest tr:nth-child(3) td:nth-child(2)')
const underTwentyPayout = document.querySelector('#special-harvest tr:nth-child(4) td:nth-child(2)')
const overTenPayout = document.querySelector('#special-harvest tr:nth-child(5) td:nth-child(2)')
const underTenPayout = document.querySelector('#special-harvest tr:nth-child(6) td:nth-child(2)')

const hunterEntries = document.querySelector('#payout-nums tr td:nth-child(1)');
const payoutModel = document.querySelector('#payout-nums tr td:nth-child(2)');
const grossRevenue = document.querySelector('#payout-nums tr:nth-child(4) td:nth-child(1)');
const hunterPayout = document.querySelector('#payout-nums tr:nth-child(4) td:nth-child(2)');


const entriesForm = document.querySelector('form');

let hEntries = 500;
calcPayout(hEntries)
hunterEntries.innerText = hEntries;
grossRevenue.innerText = `$${grossRev(hEntries)}`;
hunterPayout.innerText = `$${calcHunterPayout()}`;
document.getElementById('gross-margin').innerText = `$${apexMargin(hEntries,calcHunterPayout())}`;

entriesForm.addEventListener('submit', function(e){
    e.preventDefault();

        hEntries = document.querySelector('input[id ="hunter-entries"]').value;
   
   if (document.querySelectorAll('#new-payout')){

        let oldPayouts = (document.querySelectorAll('#new-payout'));
        oldPayouts.forEach(payout => payout.remove());
}
     
    calcPayout(hEntries);

   

   if (hEntries > 500){
        payoutModel.innerText = roundTwoFidy(hEntries);
   }
   else{
    payoutModel.innerText = hEntries - hEntries % 10;
   }
   hunterEntries.innerText = hEntries;
   grossRevenue.innerText = `$${grossRev(hEntries)}`;
   hunterPayout.innerText = `$${calcHunterPayout()}`;
   document.getElementById('gross-margin').innerText = `$${apexMargin(hEntries,calcHunterPayout())}`;
    

})


function apexMargin(a,b){
    
    if (a * 125 - b < 0){
        document.getElementById('gross-margin').className ='negative';
        return a * 125 - b;
    }
    else{
    document.getElementById('gross-margin').className = '';
    return a * 125 - b;
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

function roundToNearestHundred(num){
    if (num % 100 < 50){
        num -= num % 100;
    }
    else {
        num += 100 - num % 100;
    }
    return num
}



function calcPayout(num){

    num -= num % 10;

    if (num < 150){
       let specialHarvestPayout = 0
        if (num*4 < 250) {
            specialHarvestPayout = 250
            console.log(specialHarvestPayout)
        } else specialHarvestPayout = roundToNearestHundred(num*4)
        // num -= num % 50;
        // firstPlacePayout.innerText = `$${roundToNearestHundred(num*6)}`;
        // secondPlacePayout.innerText = `$${roundToNearestHundred(num*6)}`;
        // thirdPlacePayout.innerText = `$${roundToNearestHundred(num*6)}`;
        // fourthPlacePayout.innerText = `$${roundToNearestHundred(num*6)}`;
        // fifthPlacePayout.innerText = `$${roundToNearestHundred(num*6)}`;
        // sixthPlacePayout.innerText = `$${roundToNearestHundred(num*4.5)}`;
        // seventhPlacePayout.innerText = `$${roundToNearestHundred(num*4.5)}`;
        // eighthPlacePayout.innerText = `$${roundToNearestHundred(num*4.5)}`;
        // ninthPlacePayout.innerText = `$${roundToNearestHundred(num*4.5)}`;
        // tenthPlacePayout.innerText = `$${roundToNearestHundred(num*4.5)}`;

        const payoutPlaces = [
            firstPlacePayout,
            secondPlacePayout,
            thirdPlacePayout,
            fourthPlacePayout,
            fifthPlacePayout,
            sixthPlacePayout, 
            seventhPlacePayout,
            eighthPlacePayout, 
            ninthPlacePayout,
            tenthPlacePayout
        ]
        const places = Math.floor(num / 10)
        console.log("Places ===",places)
        console.log(payoutPlaces.slice(0,places))
        for (let i = 0; i <= places; i++) {
            if (i > 4) {
                console.log(payoutPlaces[i])
                payoutPlaces[i].innerText = `$${roundToNearestHundred(num*4.5)}`;
            } else {
                console.log(payoutPlaces[i])
                payoutPlaces[i].innerText = `$${roundToNearestHundred(num*6)}`;
            }
            
        }

        if (places < 10) {
            for (let p of payoutPlaces.slice(places)) {
                p.innerText = "$0"
            }
        }

        twentyPlacePayout.innerText = `$${0}`; 
        thirtyPlacePayout.innerText = `$${0}`; 
        fortyPlacePayout.innerText = `$${0}`; 
        fiftyPlacePayout.innerText = `$${0}`; 
        sixtyPlacePayout.innerText = `$${0}`;
        seventyPlacePayout.innerText = `$${0}`;
        eightyPlacePayout.innerText = `$${0}`; 
        ninetyPlacePayout.innerText = `$${0}`; 
        hundredPlacePayout.innerText = `$${0}`;

        // twentyPlace.style.display="none";
        // thirtyPlace.style.display="none";
        // fortyPlace.style.display="none";
        // fiftyPlace.style.display="none";
        // sixtyPlace.style.display="none";
        // seventyPlace.style.display="none";
        // eightyPlace.style.display="none";
        // ninetyPlace.style.display="none";
        // hundredPlace.style.display="none";
       

        overSpursPayout.innerText = `$${specialHarvestPayout}`; 
        underSpursPayout.innerText = `$${specialHarvestPayout}`;
        OverTwentyPayout.innerText = `$${specialHarvestPayout}`; 
        underTwentyPayout.innerText = `$${specialHarvestPayout}`;
        overTenPayout.innerText = `$${specialHarvestPayout}`;
        underTenPayout.innerText = `$${specialHarvestPayout}`;
    }
    else if (num < 250){
        // num -= num % 50;
        firstPlacePayout.innerText = `$${roundToNearestHundred(num*6)}`;
        secondPlacePayout.innerText = `$${roundToNearestHundred(num*6)}`;
        thirdPlacePayout.innerText = `$${roundToNearestHundred(num*6)}`;
        fourthPlacePayout.innerText = `$${roundToNearestHundred(num*6)}`;
        fifthPlacePayout.innerText = `$${roundToNearestHundred(num*6)}`;
        sixthPlacePayout.innerText = `$${roundToNearestHundred(num*4.5)}`;
        seventhPlacePayout.innerText = `$${roundToNearestHundred(num*4.5)}`;
        eighthPlacePayout.innerText = `$${roundToNearestHundred(num*4.5)}`;
        ninthPlacePayout.innerText = `$${roundToNearestHundred(num*4.5)}`;
        tenthPlacePayout.innerText = `$${roundToNearestHundred(num*4.5)}`;

        twentyPlacePayout.innerText = `$${roundToNearestHundred(num*2)}`
        thirtyPlacePayout.innerText = `$${roundToNearestHundred(num*2)}`; 
        fortyPlacePayout.innerText = `$${roundToNearestHundred(num*2)}`; 
        fiftyPlacePayout.innerText = `$${roundToNearestHundred(num*2)}`; 
        sixtyPlacePayout.innerText = `$${0}`;
        seventyPlacePayout.innerText = `$${0}`;
        eightyPlacePayout.innerText = `$${0}`; 
        ninetyPlacePayout.innerText = `$${0}`; 
        hundredPlacePayout.innerText = `$${0}`;

        // sixtyPlace.style.display="none";
        // seventyPlace.style.display="none";
        // eightyPlace.style.display="none";
        // ninetyPlace.style.display="none";
        // hundredPlace.style.display="none";
       

        overSpursPayout.innerText = `$${roundToNearestHundred(num*4)}`; 
        underSpursPayout.innerText = `$${roundToNearestHundred(num*4)}`; 
        OverTwentyPayout.innerText = `$${roundToNearestHundred(num*4)}`; 
        underTwentyPayout.innerText = `$${roundToNearestHundred(num*4)}`;
        overTenPayout.innerText = `$${roundToNearestHundred(num*4)}`;
        underTenPayout.innerText = `$${roundToNearestHundred(num*4)}`;
    }
    else if (num <= 500){
        firstPlacePayout.innerText = `$${roundToNearestHundred(num*6)}`;
        secondPlacePayout.innerText = `$${roundToNearestHundred(num*6)}`;
        thirdPlacePayout.innerText = `$${roundToNearestHundred(num*6)}`;
        fourthPlacePayout.innerText = `$${roundToNearestHundred(num*6)}`;
        fifthPlacePayout.innerText = `$${roundToNearestHundred(num*6)}`;
        sixthPlacePayout.innerText = `$${roundToNearestHundred(num*4.5)}`;
        seventhPlacePayout.innerText = `$${roundToNearestHundred(num*4.5)}`;
        eighthPlacePayout.innerText = `$${roundToNearestHundred(num*4.5)}`;
        ninthPlacePayout.innerText = `$${roundToNearestHundred(num*4.5)}`;
        tenthPlacePayout.innerText = `$${roundToNearestHundred(num*4.5)}`;

        twentyPlacePayout.innerText = `$500`; 
        thirtyPlacePayout.innerText = `$500`; 
        fortyPlacePayout.innerText = `$500`; 
        fiftyPlacePayout.innerText = `$500`; 
        sixtyPlacePayout.innerText = `$500`;
        seventyPlacePayout.innerText = `$250`;
        eightyPlacePayout.innerText = `$250`; 
        ninetyPlacePayout.innerText = `$250`; 
        hundredPlacePayout.innerText = `$250`;

        // overSpursPayout.innerText = `$${roundToNearestHundred(num*2.70)}`; 
        overSpursPayout.innerText = `$${roundToNearestHundred(num*3)}`; 
        underSpursPayout.innerText = `$${roundToNearestHundred(num*3)}`; 
        OverTwentyPayout.innerText = `$${roundToNearestHundred(num*3)}`; 
        underTwentyPayout.innerText = `$${roundToNearestHundred(num*3)}`;
        overTenPayout.innerText = `$${roundToNearestHundred(num*3)}`;
        underTenPayout.innerText = `$${roundToNearestHundred(num*3)}`;
    }

    if (num > 500){
        if (num > 500 && num < 750) { num = 500 } 
        if (num > 750 && num < 1000) { num = 750 } 
        if (num > 1000 && num < 1250) { num = 1000 } 
        if (num > 1250 && num < 1500) { num = 1250 } 
        // if (num > 500 && num < 750) { num = 500 } 
        firstPlacePayout.innerText = `$${roundToNearestHundred(num*6)}`;
        secondPlacePayout.innerText = `$${roundToNearestHundred(num*6)}`;
        thirdPlacePayout.innerText = `$${roundToNearestHundred(num*6)}`;
        fourthPlacePayout.innerText = `$${roundToNearestHundred(num*6)}`;
        fifthPlacePayout.innerText = `$${roundToNearestHundred(num*6)}`;
        sixthPlacePayout.innerText = `$${roundToNearestHundred(num*4.5)}`;
        seventhPlacePayout.innerText = `$${roundToNearestHundred(num*4.5)}`;
        eighthPlacePayout.innerText = `$${roundToNearestHundred(num*4.5)}`;
        ninthPlacePayout.innerText = `$${roundToNearestHundred(num*4.5)}`;
        tenthPlacePayout.innerText = `$${roundToNearestHundred(num*4.5)}`;

        twentyPlacePayout.innerText = `$1000`; 
        thirtyPlacePayout.innerText = `$1000`; 
        fortyPlacePayout.innerText = `$1000`; 
        fiftyPlacePayout.innerText = `$1000`; 
        sixtyPlacePayout.innerText = `$500`;
        seventyPlacePayout.innerText = `$500`;
        eightyPlacePayout.innerText = `$500`; 
        ninetyPlacePayout.innerText = `$500`; 
        hundredPlacePayout.innerText = `$500`;

        // overSpursPayout.innerText = `$${roundToNearestHundred(num*2.70)}`; 
        overSpursPayout.innerText = `$${roundTwoFidy(num*3)}`; 
        underSpursPayout.innerText = `$${roundToNearestHundred(num*3)}`; 
        OverTwentyPayout.innerText = `$${roundToNearestHundred(num*3)}`; 
        underTwentyPayout.innerText = `$${roundToNearestHundred(num*3)}`;
        overTenPayout.innerText = `$${roundToNearestHundred(num*3)}`;
        underTenPayout.innerText = `$${roundToNearestHundred(num*3)}`;
    }

    if(num >= 750){
        if (num > 750 && num < 1000) { num = 750 } 
        if (num > 1000 && num < 1250) { num = 1000 } 
        if (num > 1250 && num < 1500) { num = 1250 } 

        sixtyPlacePayout.innerText = `$${roundTwoFidy(500*2)}`;

        newTr = document.createElement('tr');
        newTr.id = 'new-payout'
        newPlaceTd = document.createElement('td');
        newPlaceTd.innerText = '110th';
        newTr.append(newPlaceTd);

        newPayoutTd = document.createElement('td');
        newPayoutTd.innerText = `$500`;
        newTr.append(newPayoutTd);

        document.querySelector('#on-the-tens tbody').append(newTr);

        newTr = document.createElement('tr');
        newTr.id = 'new-payout'
        newPlaceTd = document.createElement('td');
        newPlaceTd.innerText = '120th';
        newTr.append(newPlaceTd);

        newPayoutTd = document.createElement('td');
        newPayoutTd.innerText = `$500`;
        newTr.append(newPayoutTd);

        document.querySelector('#on-the-tens tbody').append(newTr);
        
    }

    if(num >= 1000){

        if (num > 1000 && num < 1250) { num = 1000 } 
        if (num > 1250 && num < 1500) { num = 1250 } 

        seventyPlacePayout.innerText = `$${500*2}`;

        newTr = document.createElement('tr');
        newTr.id = 'new-payout'
        newPlaceTd = document.createElement('td');
        newPlaceTd.innerText = '130th';
        newTr.append(newPlaceTd);

        newPayoutTd = document.createElement('td');
        newPayoutTd.innerText = `$500`;
        newTr.append(newPayoutTd);

        document.querySelector('#on-the-tens tbody').append(newTr);

        newTr = document.createElement('tr');
        newTr.id = 'new-payout'
        newPlaceTd = document.createElement('td');
        newPlaceTd.innerText = '140th';
        newTr.append(newPlaceTd);

        newPayoutTd = document.createElement('td');
        newPayoutTd.innerText = `$500`;
        newTr.append(newPayoutTd);

        document.querySelector('#on-the-tens tbody').append(newTr);
        
    }

    if(num >= 1250){

        if (num > 1250 && num < 1500) { num = 1250 } 

        eightyPlacePayout.innerText = `$${(500*2)}`;

        newTr = document.createElement('tr');
        newTr.id = 'new-payout'
        newPlaceTd = document.createElement('td');
        newPlaceTd.innerText = '150th';
        newTr.append(newPlaceTd);

        newPayoutTd = document.createElement('td');
        newPayoutTd.innerText = `$500`;
        newTr.append(newPayoutTd);

        document.querySelector('#on-the-tens tbody').append(newTr);

        newTr = document.createElement('tr');
        newTr.id = 'new-payout'
        newPlaceTd = document.createElement('td');
        newPlaceTd.innerText = '160th';
        newTr.append(newPlaceTd);

        newPayoutTd = document.createElement('td');
        newPayoutTd.innerText = `$500`;
        newTr.append(newPayoutTd);

        document.querySelector('#on-the-tens tbody').append(newTr);
        
    }


    if(num >= 1500){

        ninetyPlacePayout.innerText = `$1000`;

        newTr = document.createElement('tr');
        newTr.id = 'new-payout'
        newPlaceTd = document.createElement('td');
        newPlaceTd.innerText = '170th';
        newTr.append(newPlaceTd);

        newPayoutTd = document.createElement('td');
        newPayoutTd.innerText = `$500`;
        newTr.append(newPayoutTd);

        document.querySelector('#on-the-tens tbody').append(newTr);

        newTr = document.createElement('tr');
        newTr.id = 'new-payout'
        newPlaceTd = document.createElement('td');
        newPlaceTd.innerText = '180th';
        newTr.append(newPlaceTd);

        newPayoutTd = document.createElement('td');
        newPayoutTd.innerText = `$500`;
        newTr.append(newPayoutTd);

        document.querySelector('#on-the-tens tbody').append(newTr);
        
    }


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


}