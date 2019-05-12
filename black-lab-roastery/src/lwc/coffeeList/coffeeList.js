import { LightningElement, track, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getAllShops from '@salesforce/apex/ctrlCoffeeDistributors.getAllShops';
import searchShops from '@salesforce/apex/ctrlCoffeeDistributors.searchShops';
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

    @wire(searchShops, {searchTerm: '$searchTerm'})
	loadShops(result) {
		this.shops = result.data;
	}

	handleSearchTermChange(event) {
		// Debouncing this method: do not update the reactive property as
		// long as this function is being called within a delay of 300 ms.
		// This is to avoid a very large number of Apex method calls.
		window.clearTimeout(this.delayTimeout);
		const searchTerm = event.target.value;
		// eslint-disable-next-line @lwc/lwc/no-async-operation
		this.delayTimeout = setTimeout(() => {
			this.searchTerm = searchTerm;
		}, 300);
	}

    handleRecordNavigagtion(evt) {
        let shopId = evt.currentTarget.getAttribute("data-id");
        // Navigate to shop record page
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
        return this.shops < 1;
    }
}