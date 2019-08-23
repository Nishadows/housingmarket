var APIKEY='kGVwzzWG3_uHEYtaUpi7';

// var APIKey=config.apikey;
// import apiConfig from 'config';

/** function to select data
* @param {array} rows
* @param {integer} index
*/
function unpack(rows,index){
    return rows.map(function(row){
        return row[index];
    });
}

function getYearlyData(){
    var queryURL=`https://www.quandl.com/api/v3/datasets/NAHB/HOI_AREA_TACOMALAKEWOODWA.json?start_date=1991-03-31&end_date=2019-03-31&collapse=yearly&api_key=${APIKEY}`;
    d3.json(queryURL).then(function(data){
        
    });
}

function buildPlot(){
    var url=`https://www.quandl.com/api/v3/datasets/NAHB/HOI_AREA_TACOMALAKEWOODWA.json?start_date=1991-03-31&end_date=2019-03-31&api_key=${APIKEY}`;
    d3.json(url).then(function(data){
        var startDate=data.dataset.start_date;
        var endDate=data.dataset.end_state;
        var quarter=unpack(data.dataset.data,0);
        var medianprice=unpack(data.dataset.data,1);
        var housing_op=unpack(data.dataset.data,2);
        var medianincome=unpack(data.dataset.data,3);

        getYearlyData();

        var trace={
            type:"scatter",
            mode:"lines",
            name: "Median Prices",
            x: quarter,
            y: medianprice,
            line:{
                color:"#17BECF"
            }
        };
        var trace1={
            type:"scatter",
            mode:"lines",
            name: "Housing Opportunity Index",
            x: quarter,
            y: housing_op,
            line:{
                color:"#800000"
            }
        }
        var trace2={
            type:"scatter",
            mode:"lines",
            name: "Median Income",
            x: quarter,
            y: medianincome,
            line:{
                color:"#FFD700"
            } 
        }
        var data=[trace,trace1,trace2];

        var layout={
            title:`Tacoma-Lakewood WA`,
            xaxis:{
                title:"Year",
                range:[startDate,endDate],
                type:"date"
            },
            yaxis:{
                autorange:true,
                type:"linear"
            },
            showlegend:true
        };
        Plotly.newPlot("plotSeattlesouth",data,layout);
    });
}
buildPlot();
