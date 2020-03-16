//
//  RNCalendarManager.h
//  NativeAccess
//
//  Created by benny on 2020/03/16.
//  Copyright © 2020 Facebook. All rights reserved.
//
#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RNCalendarManager : NSObject <RCTBridgeModule>
-(void) showToast:(NSString*) msg;
-(void) showToast:(NSString*) msg duration:(double) duration;
@end
