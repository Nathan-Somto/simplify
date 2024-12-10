
/* interface Props {
    price: string | number
    description: string
    btnType: 'secondary' | 'primary' | 'accent'
    features: string[]
    badgeType: 'accent' | 'dark'
    badgeText: string
} */
function extractContent(){
    const content = {
        h6: Array.from(document.querySelectorAll('h6')).map(h6 => h6.textContent.trim()),
        description: Array.from(document.querySelectorAll('p')).map(p => p.textContent.trim()),
        price: Array.from(document.querySelectorAll('h2')).map(h2 => h2.textContent.trim()),
    }
    // for the h6 the algo is simple the 3 strings before key features are badgeText, per month text and btn text, then the rest are features which we put in our features array there should be 3 features arrays
    let isFeature = false;
    let pricingArray = [];
    let currentPricing = {
        features:[],
        monthText: '',
        badgeText: '',
        btnText: ''
    };
    let indexBeforeFeatures = 0;
    let times = 1;
    content.h6.forEach((item, index) => {
        if(item === 'Key features'){
            isFeature = true;
            indexBeforeFeatures = 0;
            return;
        }
        if(indexBeforeFeatures === 0  || index % 11 === 0){
            if(isFeature){
                currentPricing.btnType = times === 1 ? 'primary' : times === 2 ? 'secondary' : 'accent';
                pricingArray.push(currentPricing);
                currentPricing = {
                    features:[],
                    badgeText: '',
                    btnType: ''
                };
                times+=1;
            }
            isFeature = false;
            currentPricing.badgeText = item;
            indexBeforeFeatures= 1;
            return;
        }
        if(indexBeforeFeatures === 1){
            currentPricing.monthText = item;
            indexBeforeFeatures = 2;
            return;
        }
        if(indexBeforeFeatures === 2){
            currentPricing.btnText = item;
            indexBeforeFeatures = 3;
            return;
        }
    });
    let pricingIndex = 0;
    for (let i = 0; i < content.h6.length; i++) {
        if(content.h6[i] === 'Key features'){
            console.log('features');
            // loop all the elements from i+1 till we encounter a Key features at i+2;
            let features = [];
            for (let j = i+1; j < content.h6.length; j++) {
                if(content.h6[j+2] === 'Key features'){
                    console.log(content.h6[j+2])
                    //i = j + 1;
                    pricingArray[pricingIndex].features = features;
                    pricingIndex+=1;
                    break;
                }
                if(j % 11 !== 0){
                    features.push(content.h6[j]);
                }
            }
            console.log("continued")
        }
    }
    pricingArray[2].features = content.h6.slice(26, 34);
    console.log(pricingArray);
    return content
}
console.log(extractContent())