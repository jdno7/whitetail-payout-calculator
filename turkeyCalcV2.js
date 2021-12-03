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
const thirtyPlacePayout = document.querySelector('#on-the-tens tr:nth-child(2) td:nth-child(2)')
const fortyPlacePayout = document.querySelector('#on-the-tens tr:nth-child(3) td:nth-child(2)')
const fiftyPlacePayout = document.querySelector('#on-the-tens tr:nth-child(4) td:nth-child(2)')
const sixtyPlacePayout = document.querySelector('#on-the-tens tr:nth-child(5) td:nth-child(2)')
const seventyPlacePayout = document.querySelector('#on-the-tens tr:nth-child(6) td:nth-child(2)')
const eightyPlacePayout = document.querySelector('#on-the-tens tr:nth-child(7) td:nth-child(2)')
const ninetyPlacePayout = document.querySelector('#on-the-tens tr:nth-child(8) td:nth-child(2)')
const hundredPlacePayout = document.querySelector('#on-the-tens tr:nth-child(9) td:nth-child(2)')

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

entriesForm.addEventListener('submit', function(e){
    e.preventDefault();

   const hEntries = document.querySelector('input[id ="hunter-entries"]').value;
   
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
    if (num <= 500){
        firstPlacePayout.innerText = `$${roundToNearestHundred(num*10)}`;
        secondPlacePayout.innerText = `$${roundToNearestHundred(num*10)}`;
        thirdPlacePayout.innerText = `$${roundToNearestHundred(num*10)}`;
        fourthPlacePayout.innerText = `$${roundToNearestHundred(num*10)}`;
        fifthPlacePayout.innerText = `$${roundToNearestHundred(num*10)}`;
        sixthPlacePayout.innerText = `$${roundToNearestHundred(num*7.5)}`;
        seventhPlacePayout.innerText = `$${roundToNearestHundred(num*7.5)}`;
        eighthPlacePayout.innerText = `$${roundToNearestHundred(num*7.5)}`;
        ninthPlacePayout.innerText = `$${roundToNearestHundred(num*7.5)}`;
        tenthPlacePayout.innerText = `$${roundToNearestHundred(num*7.5)}`;

        twentyPlacePayout.innerText = `$${roundToNearestHundred(num*2)}`; 
        thirtyPlacePayout.innerText = `$${roundToNearestHundred(num*2)}`; 
        fortyPlacePayout.innerText = `$${roundToNearestHundred(num*2)}`; 
        fiftyPlacePayout.innerText = `$${roundToNearestHundred(num*2)}`; 
        sixtyPlacePayout.innerText = `$${roundToNearestHundred(num*1)}`;
        seventyPlacePayout.innerText = `$${roundToNearestHundred(num*1)}`;
        eightyPlacePayout.innerText = `$${roundToNearestHundred(num*1)}`; 
        ninetyPlacePayout.innerText = `$${roundToNearestHundred(num*1)}`; 
        hundredPlacePayout.innerText = `$${roundToNearestHundred(num*1)}`;

        overSpursPayout.innerText = `$${roundToNearestHundred(num*4)}`; 
        underSpursPayout.innerText = `$${roundToNearestHundred(num*4)}`; 
        OverTwentyPayout.innerText = `$${roundToNearestHundred(num*4)}`; 
        underTwentyPayout.innerText = `$${roundToNearestHundred(num*4)}`;
        overTenPayout.innerText = `$${roundToNearestHundred(num*4)}`;
        underTenPayout.innerText = `$${roundToNearestHundred(num*4)}`;
    }

    if (num > 500){
        
        firstPlacePayout.innerText = `$${roundToNearestHundred((500*10) + (num-500) * 5)}`;
        secondPlacePayout.innerText = `$${roundToNearestHundred((500*10) + (num-500) * 5)}`;
        thirdPlacePayout.innerText = `$${roundToNearestHundred((500*10) + (num-500) * 5)} `;
        fourthPlacePayout.innerText = `$${roundToNearestHundred((500*10) + (num-500) * 5)}`;
        fifthPlacePayout.innerText = `$${roundToNearestHundred((500*10) + (num-500) * 5)}`;
        sixthPlacePayout.innerText = `$${roundToNearestHundred((500*7.5) + (num-500) * 3.75)}`;
        seventhPlacePayout.innerText = `$${roundToNearestHundred((500*7.5) + (num-500) * 3.75)}`;
        eighthPlacePayout.innerText = `$${roundToNearestHundred((500*7.5) + (num-500) * 3.75)}`;
        ninthPlacePayout.innerText = `$${roundToNearestHundred((500*7.5) + (num-500) * 3.75)}`;
        tenthPlacePayout.innerText = `$${roundToNearestHundred((500*7.5) + (num-500) * 3.75)}`;

        twentyPlacePayout.innerText = `$${500*2}`; 
        thirtyPlacePayout.innerText = `$${500*2}`; 
        fortyPlacePayout.innerText = `$${500*2}`; 
        fiftyPlacePayout.innerText = `$${500*2}`; 
        sixtyPlacePayout.innerText = `$${500*1}`;
        seventyPlacePayout.innerText = `$${500*1}`;
        eightyPlacePayout.innerText = `$${500*1}`; 
        ninetyPlacePayout.innerText = `$${500*1}`; 
        hundredPlacePayout.innerText = `$${500*1}`;

        overSpursPayout.innerText = `$${roundToNearestHundred((500*4) + (num-500) * 2)}`; 
        underSpursPayout.innerText = `$${roundToNearestHundred((500*4) + (num-500) * 2)}`; 
        OverTwentyPayout.innerText = `$${roundToNearestHundred((500*4) + (num-500) * 2)}`; 
        underTwentyPayout.innerText = `$${roundToNearestHundred((500*4) + (num-500) * 2)}`;
        overTenPayout.innerText = `$${roundToNearestHundred((500*4) + (num-500) * 2)}`;
        underTenPayout.innerText = `$${roundToNearestHundred((500*4) + (num-500) * 2)}`;
    }

    if(num >= 750){

        sixtyPlacePayout.innerText = `$${500*2}`;

        newTr = document.createElement('tr');
        newTr.id = 'new-payout'
        newPlaceTd = document.createElement('td');
        newPlaceTd.innerText = '110th';
        newTr.append(newPlaceTd);

        newPayoutTd = document.createElement('td');
        newPayoutTd.innerText = '$500';
        newTr.append(newPayoutTd);

        document.querySelector('#on-the-tens tbody').append(newTr);

        newTr = document.createElement('tr');
        newTr.id = 'new-payout'
        newPlaceTd = document.createElement('td');
        newPlaceTd.innerText = '120th';
        newTr.append(newPlaceTd);

        newPayoutTd = document.createElement('td');
        newPayoutTd.innerText = '$500';
        newTr.append(newPayoutTd);

        document.querySelector('#on-the-tens tbody').append(newTr);
        
    }

    if(num >= 1000){

        seventyPlacePayout.innerText = `$${500*2}`;

        newTr = document.createElement('tr');
        newTr.id = 'new-payout'
        newPlaceTd = document.createElement('td');
        newPlaceTd.innerText = '130th';
        newTr.append(newPlaceTd);

        newPayoutTd = document.createElement('td');
        newPayoutTd.innerText = '$500';
        newTr.append(newPayoutTd);

        document.querySelector('#on-the-tens tbody').append(newTr);

        newTr = document.createElement('tr');
        newTr.id = 'new-payout'
        newPlaceTd = document.createElement('td');
        newPlaceTd.innerText = '140th';
        newTr.append(newPlaceTd);

        newPayoutTd = document.createElement('td');
        newPayoutTd.innerText = '$500';
        newTr.append(newPayoutTd);

        document.querySelector('#on-the-tens tbody').append(newTr);
        
    }

    if(num >= 1250){

        eightyPlacePayout.innerText = `$${500*2}`;

        newTr = document.createElement('tr');
        newTr.id = 'new-payout'
        newPlaceTd = document.createElement('td');
        newPlaceTd.innerText = '150th';
        newTr.append(newPlaceTd);

        newPayoutTd = document.createElement('td');
        newPayoutTd.innerText = '$500';
        newTr.append(newPayoutTd);

        document.querySelector('#on-the-tens tbody').append(newTr);

        newTr = document.createElement('tr');
        newTr.id = 'new-payout'
        newPlaceTd = document.createElement('td');
        newPlaceTd.innerText = '160th';
        newTr.append(newPlaceTd);

        newPayoutTd = document.createElement('td');
        newPayoutTd.innerText = '$500';
        newTr.append(newPayoutTd);

        document.querySelector('#on-the-tens tbody').append(newTr);
        
    }


    if(num >= 1500){

        ninetyPlacePayout.innerText = `$${500*2}`;

        newTr = document.createElement('tr');
        newTr.id = 'new-payout'
        newPlaceTd = document.createElement('td');
        newPlaceTd.innerText = '170th';
        newTr.append(newPlaceTd);

        newPayoutTd = document.createElement('td');
        newPayoutTd.innerText = '$500';
        newTr.append(newPayoutTd);

        document.querySelector('#on-the-tens tbody').append(newTr);

        newTr = document.createElement('tr');
        newTr.id = 'new-payout'
        newPlaceTd = document.createElement('td');
        newPlaceTd.innerText = '180th';
        newTr.append(newPlaceTd);

        newPayoutTd = document.createElement('td');
        newPayoutTd.innerText = '$500';
        newTr.append(newPayoutTd);

        document.querySelector('#on-the-tens tbody').append(newTr);
        
    }


    if(num >= 1750){

        hundredPlacePayout.innerText = `$${500*2}`;

        newTr = document.createElement('tr');
        newTr.id = 'new-payout'
        newPlaceTd = document.createElement('td');
        newPlaceTd.innerText = '190th';
        newTr.append(newPlaceTd);

        newPayoutTd = document.createElement('td');
        newPayoutTd.innerText = '$500';
        newTr.append(newPayoutTd);

        document.querySelector('#on-the-tens tbody').append(newTr);

        newTr = document.createElement('tr');
        newTr.id = 'new-payout'
        newPlaceTd = document.createElement('td');
        newPlaceTd.innerText = '200th';
        newTr.append(newPlaceTd);

        newPayoutTd = document.createElement('td');
        newPayoutTd.innerText = '$500';
        newTr.append(newPayoutTd);

        document.querySelector('#on-the-tens tbody').append(newTr);
        
    }


}