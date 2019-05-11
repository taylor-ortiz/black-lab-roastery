import { LightningElement, track, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getAllDistis from '@salesforce/apex/ctrlCoffeeDistributors.getAllDistis';
import myResource from '@salesforce/resourceUrl/coffee_image';
export default class coffeeList extends NavigationMixin(LightningElement) {
    @track distributors;
    @track error;
    @track searchTerm = '';
    coffeeImage = myResource;


	@wire(getAllDistis, {})
    getAllDistis(result) {
        if (result.data) {
            this.distributors = result.data;
        } else if (result.error) {
			this.error = result;
        }
    }

    handleRecordNavigagtion(evt) {
        let distributorId = evt.currentTarget.getAttribute("data-id");
        // Navigate to bear record page
		this[NavigationMixin.Navigate]({
			type: 'standard__recordPage',
			attributes: {
				recordId: distributorId,
				objectApiName: 'Distribution__c',
				actionName: 'view',
			},
		});
    }

    // Function to show other option on how to qualify with directives
    get hasDistributors() {
        return typeof this.error !== 'undefined';
    }
}