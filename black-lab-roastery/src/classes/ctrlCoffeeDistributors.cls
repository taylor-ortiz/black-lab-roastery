public class ctrlCoffeeDistributors {

    @AuraEnabled (cacheable=true)
    public static List<Shop__c> getAllShops(){
        return [SELECT Name, Description__c FROM Shop__c];
    }
}