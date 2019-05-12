![Test Image 1](http://craftbeerpassport-b860.kxcdn.com/wp-content/uploads/2018/10/Black-Lab-Brewing-Logo.png)
# black-lab-roastery

Cindy has an up and coming start up selling coffee called Black Lab Roastery. Cindy owns a roastery for the coffee beans she buys from all over the world and has also just hired a packaging company. Now, she needs to keep track of the distributors and the performance of her beans. She hires a Salesforce Developer (you) to build an app that gives her a visual representation of the following:<br/>
<ul>
  <li>Current distributors</li>
  <li>Distributor location</li>
  <li>Type of coffee beans sold there</li>
  <li>Cost per package</li>
  <li>Map showing the locations of the business in Denver</li>
</ul>


# Setup Instructions:

1. To install the the Black Lab Roastery unlocked package into your org, just click on this <a href="https://login.salesforce.com/packaging/installPackage.apexp?p0=04t1I0000036w4eQAA" target="_new">link</a>. The security key is <b>test1234</b>.

2. Assign the <b>blackLabRoastery</b> permission set to the default user:<br/>
sfdx force:user:permset:assign -n blackLabRoastery

3. Load the sample data:<br/>
sfdx force:data:tree:import --plan ./data/sample-data-plan.json
