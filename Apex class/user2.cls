public class user2 {


 @AuraEnabled(cacheable=true)
  public static String getprofile() {
   
 String info;
 List<Profile> data = [SELECT Name FROM Profile WHERE Id=:userinfo.getProfileId() LIMIT 1];
 for(Profile p : data)
 {
  info = p.Name;
 }
    return  info;
  }



}