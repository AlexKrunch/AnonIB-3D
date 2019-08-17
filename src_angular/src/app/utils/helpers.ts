export class Helpers {

    /**
     * Determine the mobile operating system.
     * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
     *
     * @returns {Boolean}
     */

    public static isMobile() {

        let userAgent = navigator.userAgent || navigator.vendor ;
  
        // Windows Phone must come first because its UA also contains "Android"
        if (/windows phone/i.test(userAgent)) {
            return true;
        }
    
        if (/android/i.test(userAgent)) {
            return true;
        }
    
        // iOS detection from: http://stackoverflow.com/a/9039885/177710
        if (/iPad|iPhone|iPod/.test(userAgent) ) {
            return true;
        }
  
      return false;
  }

  public static antiWord(message_){
    return message_.replace(/nigger/ig, 'noggel');
  }

  public static isPT(){
    let lang = navigator.language ; 
    return (lang.toLowerCase().indexOf('pt') > -1 || lang.toLowerCase().indexOf('BR') > -1);
  }

}