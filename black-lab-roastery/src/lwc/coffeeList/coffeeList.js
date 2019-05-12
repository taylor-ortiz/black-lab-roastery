import { LightningElement, track, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getAllShops from '@salesforce/apex/ctrlCoffeeDistributors.getAllShops';
import myResource from '@salesforce/resourceUrl/coffee_image';
export default class coffeeList extends NavigationMixin(LightningElement) {
    @track shops;
    @track error;
    @track searchTerm = '';
    coffeeImage = myResource;


	@wire(getAllShops, {})
    getAllShops(result) {
        if (result.data) {
            this.shops = result.data;
        } else if (result.error) {
			this.error = result;
        }
    }

    handleRecordNavigagtion(evt) {
        let shopId = evt.currentTarget.getAttribute("data-id");
        // Navigate to bear record page
		this[NavigationMixin.Navigate]({
			type: 'standard__recordPage',
			attributes: {
				recordId: shopId,
				objectApiName: 'Shop__c',
				actionName: 'view',
			},
		});
    }

    // Function to show other option on how to qualify with directives
    get hasShops() {
        return typeof this.error !== 'undefined';
    }
}