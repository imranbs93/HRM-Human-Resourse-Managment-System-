package com.demoproject22;

import com.facebook.react.ReactActivity;

import android.content.Intent; // <--- import
import android.content.res.Configuration; // <--- import


public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */

  @Override
      public void onConfigurationChanged(Configuration newConfig) {
        super.onConfigurationChanged(newConfig);
        Intent intent = new Intent("onConfigurationChanged");
        intent.putExtra("newConfig", newConfig);
        this.sendBroadcast(intent);
    }

  @Override
  protected String getMainComponentName() {
    return "demoProject22";
  }
}
