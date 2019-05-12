public class ctrlCoffeeDistributors {

    @AuraEnabled (cacheable=true)
    public static List<Shop__c> getAllShops(){
        return [SELECT Name, Description__c FROM Shop__c];
    }

    @AuraEnabled(Cacheable=true)
    public static List<Shop__c> searchShops(String searchTerm) {
        // Return all shops when no search term
        searchTerm = searchTerm.trim();
        if (searchTerm == '') {
            return getAllShops();
        }
        // Prepare query paramters
        searchTerm = '%'+ searchTerm +'%';
        // Execute search query
        List<Shop__c> shops = [SELECT Id, Name, Description__c
            FROM Shop__c WHERE (Name LIKE :searchTerm OR Description__c LIKE :searchTerm) ORDER BY Name];
        System.debug('what is shops? ' + shops);
        return shops;
    }
}