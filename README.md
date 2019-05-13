![Test Image 1](http://craftbeerpassport-b860.kxcdn.com/wp-content/uploads/2018/10/Black-Lab-Brewing-Logo.png)
# black-lab-roastery

Cindy has an up and coming start up selling coffee beans called Black Lab Roastery. Cindy owns a roastery for the coffee beans she buys from all over the world and has also just hired a packaging company. Now, she needs to keep track of the shops she sells to and the performance of her beans. She consults with a Salesforce Developer (you) about how she can achieve the following:<br/>
<ul>
  <li>Tool to view all of the coffee shops she sells to</li>
  <li>From the view all tool, ability to navigate to an individual shop</li>
  <li>Ability to search for her shops as her business grows by Name or the Description of the shop</li>
  <li>She's given you a logo that she would like to see on the view all tool</li>
  <li>A map of the Denver area showing all of her coffee shops. Its a 'nice to have' if the map filters down with the search</li>
</ul>

She has a list of other requirements, however she would just like to see a proof of concept to ensure shes comfortable with the approcach. Since you just learned about a cool and new technology, you recommend a Lightning Web Component and get to work!

# Setup Instructions:

1. To install the the Black Lab Roastery unlocked package into your org, just click on this <a href="https://login.salesforce.com/packaging/installPackage.apexp?p0=04t1I0000036w4yQAA" target="_new">link</a>. The security key is <b>test1234</b>.

2. Clone the repository:<br/>
git clone https://github.com/taylor-ortiz/black-lab-roastery.git

3. Assign the <b>blackLabRoastery</b> permission set to the default user:<br/>
sfdx force:user:permset:assign -n blackLabRoastery

4. Load the sample data:<br/>
sfdx force:data:tree:import --plan ./data/sample-data-plan.json

5. Open org to confirm package installation:<br/>
sfdx force:org:open

6. Check out package components to familiarize yourself with everything that is included upon installation




