var melons_to_add = ['Ogen', 'Horned Melon', 'Watermelon', 'Casaba',
                 'Sharlyn', 'Xigua', 'Ogen', 'Christmas', 'Christmas',
                 'Christmas', 'Christmas', 'Watermelon', 'Sharlyn', 'Xigua',
                 'Cantaloupe', 'Christmas', 'Watermelon', 'Christmas',
                 'Sharlyn', 'Christmas', 'Cantaloupe', 'Casaba', 'Cantaloupe',
                 'Santa Claus', 'Horned Melon', 'Watermelon', 'Ogen',
                 'Horned Melon', 'Cantaloupe', 'Xigua', 'Horned Melon', 'Sharlyn',
                 'Horned Melon', 'Sharlyn', 'Cantaloupe', 'Christmas',
                 'Horned Melon', 'Horned Melon', 'Horned Melon', 'Xigua', 'Xigua',
                 'Watermelon', 'Cantaloupe', 'Casaba', 'Cantaloupe', 'Casaba',
                 'Watermelon', 'Santa Claus', 'Casaba']

function countMelons(melonsArray){

    var melonCounts = {};
    var melon;


    for (var i = 0; i < melonsArray.length; i++){
        melon = melonsArray[i];

        if (melon in melonCounts){
            melonCounts[melon] = melonCounts[melon] + 1 ;
        }
        else{
            melonCounts[melon] = 1;
        }

    }

    // console.log(melonCounts);

    return melonCounts;

}

countMelons(melonsToAdd);
        
