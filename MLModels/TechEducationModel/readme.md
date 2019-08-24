<div class="col-lg-12 mb-4">

<div id="content"># Technology and Education Model

<div class="card shadow mb-4">

<div class="card-header py-3">#### Motivation and Overview</div>

<div class="card-body">The motivation behind this project is to make an informed predication regarding the impact that Amazon HQ2 might have on Arlington residents and housing affordability. We created a machine learning model that utilizes multivariate linear regression and variance inflation factors to determine which factors related to technology and technology workers predict housing affordability. This analysis spans 1,427 counties across the United States, with the intention to apply what we see in national trends to Arlington, or potentially any locale experiencing a boom in its technology sector.

<div class="row">

<div class="col-md-10" stle="padding-left: 1000px">

<div class="tableauPlaceholder" id="viz1566602504993" style="position: relative">

<noscript>[![ ](https://public.tableau.com/static/images/YH/YHBDZG2J3/1_rss.png)](#)</noscript>

<object class="tableauViz" style="display:none;"><param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F"> <param name="embed_code_version" value="3"> <param name="path" value="shared/YHBDZG2J3"> <param name="toolbar" value="yes"> <param name="static_image" value="https://public.tableau.com/static/images/YH/YHBDZG2J3/1.png"> <param name="animate_transition" value="yes"> <param name="display_static_image" value="yes"> <param name="display_spinner" value="yes"> <param name="display_overlay" value="yes"> <param name="display_count" value="yes"> <param name="filter" value="publish=yes"></object></div>

<script type="text/javascript">var divElement = document.getElementById('viz1566602504993'); var vizElement = divElement.getElementsByTagName('object')[0]; vizElement.style.width = '100%'; vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px'; var scriptElement = document.createElement('script'); scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js'; vizElement.parentNode.insertBefore(scriptElement, vizElement);</script></div>

</div>

</div>

</div>

</div>

</div>

<div class="row">

<div class="col-lg-12">

<div class="card shadow mb-4">

<div class="card-header py-3">#### Dataset Source: Federal Housing Finance Agency [Housing Price Index (all transactions, 2017 dollars)](https://www.fhfa.gov/hpi)</div>

<div class="card-body">To measure housing affordability more broadly, we used the Housing Price Index (HPI) developed by the Federal Housing Finance Agency (FHFA). From their [website:](https://www.fhfa.gov/DataTools/Downloads/Pages/House-Price-Index.aspx) > The FHFA House Price Index (HPI) is a broad measure of the movement of single-family house prices. The HPI is a weighted, repeat-sales index, meaning that it measures average price changes in repeat sales or refinancings on the same properties. This information is obtained by reviewing repeat mortgage transactions on single-family properties whose mortgages have been purchased or securitized by Fannie Mae or Freddie Mac since January 1975\. The HPI serves as a timely, accurate indicator of house price trends at various geographic levels. It also provides housing economists with an improved analytical tool that is useful for estimating changes in the rates of mortgage defaults, prepayments and housing affordability in specific geographic areas. We used their "All-Transactions" house price index, which also includes appraisal values from refinance mortgages in addition to the dataset of only purchases. All of the HPIs were adjusted for inflation based on 2017\. For each county, we took the average of the 2000-based HPI from 2008-2012 and 2013-2017 and matched them to the 2008-2012 and 2013-2017 education data. The data we used to determine education and migration is from the Census Bureau’s 2017-2013 and 2012-2008 5-year American Community Surveys. For each county, we used the population counts of educational attainment and migration broken down by education to calculate the average years of education for each county. We then derived several ratios to be used as potential estimators. The data for technology employees and establishments is from the Census Bureau’s County Business Patterns dataset. We then calculated the share of employees and firms in the Information and Professional, scientific and technical services sectors (NAICS codes 51 and 54).</div>

</div>

<div class="card shadow mb-4">

<div class="card-header py-3">#### Methodology</div>

<div class="card-body">

<div class="row">

<div class="col-lg-12 mb-12">Our analysis utilizes multivariate linear regression with Scikit-learn. We attempt to estimate the HPI for each county using the following variables: * Years of education: settled population * Years of education: moved population * Years of education: moved minus settled population * Moved/total population ratio * Moved/settled population ratio * Educational attainment: graduate/bachelor's ratio * Educational attainment: with/without degree ratio * Educational attainment: graduate/total population ratio * Educational attainment: bachelor's/total population ratio * Percent of employees in technology sector * Percent of establishments in technology sector * State The model calculates the variance inflation factor for all of the variables and drops any with a score over 5\. We then run the linear regression with the remaining variables to get our residuals and coefficients. Our data and model can be found here.</div>

</div>

</div>

</div>

<div class="card shadow mb-4">

<div class="card-header py-3">#### Findings</div>

<div class="card-body">

<div class="row">

<div class="col-lg-12 mb-12">Our premise assumes that technology companies attract high-skilled workers in the technology sector, and that these employees typically have more education and higher incomes. Our hypothesis is that technology companies, by attracting these employees in large numbers, may cause increases in housing prices due to both higher demand for housing and a higher willingness to pay.

<div class="row">

<div class="col-md-4" stle="padding-left: 1000px">

<center>

<table border="0" class="table table-striped">

<thead>

<tr style="text-align: center;">

<th>Variable</th>

<th>Coefficient</th>

</tr>

</thead>

<tbody>

<tr>

<td>North Dakota</td>

<td>0.235118</td>

</tr>

<tr>

<td>District of Columbia</td>

<td>0.127124</td>

</tr>

<tr>

<td>Wyoming</td>

<td>0.108699</td>

</tr>

<tr>

<td>Hawaii</td>

<td>0.104170</td>

</tr>

<tr>

<td>Share of employees in the tech industry</td>

<td>0.093010</td>

</tr>

<tr>

<td>Years of education: moved population minus settled</td>

<td>0.091691</td>

</tr>

<tr>

<td>Virginia</td>

<td>0.071996</td>

</tr>

<tr>

<td>California</td>

<td>0.045889</td>

</tr>

<tr>

<td>Maryland</td>

<td>0.044081</td>

</tr>

</tbody>

</table>

</center>

</div>

</div>

Our model with an R<sup>2</sup> score of 0.57 finds that the top four predictors of housing affordability for a county were whether the county was located in North Dakota, DC, Wyoming, or Hawaii, with coefficients of 0.24, 0.13,0.11, and 0.10, respectively . This was not a surprising result – the particulars of geographic constraints, local economies, and other factors specific to a region are significant influences in housing affordability. Our next two predictors were two variables we were particularly interested in - the share of employees in the tech industry, which predicted a 0.10 increase in the HPI, and the difference in year of education between the moved and settled populations, which predicted a 0.10 increase. This would imply that an increase in the concentration of workers in the technology sector and a more educated population of new residents both predict higher housing prices and therefore lower affordability.

<center>![Chania](img/residuals.png)</center>

</div>

</div>

</div>

</div>

</div>

</div>
