public class ctrlCoffeeDistributors {

    @AuraEnabled (cacheable=true)
    public static List<Distributor__c> getAllDistis(){
        return [SELECT Name, Description__c FROM Distributor__c];
    }
}