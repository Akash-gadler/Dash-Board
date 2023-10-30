public class user {

 @AuraEnabled(cacheable=true)
  public static String getAccounts() {
   
    String data =UserInfo.getName();
    return  data;
  }

}