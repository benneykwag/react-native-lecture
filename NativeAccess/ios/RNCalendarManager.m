//
//  RNCalendarManager.m
//  NativeAccess
//
//  Created by benny on 2020/03/16.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import "RNCalendarManager.h"
#import <React/RCTLog.h>
#import <UIKit/UIKit.h>

@property (nonatomic, retain) RNCalendarManager *toast;

@end

@implementation RNCalendarManager

// To export a module named CalendarManager
RCT_EXPORT_MODULE();
//RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
//{
//  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
//}
RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location date:(nonnull NSNumber *)secondsSinceUnixEpoch)
{
//  NSDate *date = [RCTConvert NSDate:ISO8601DateString];
    RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
  [self showToast:name];
}

RCT_EXPORT_METHOD(showToast:(NSString *)name)
{
//  NSDate *date = [RCTConvert NSDate:ISO8601DateString];
    RCTLogInfo(@"Pretending to create an event %@", name);
  [self showToast:name duration:DEFAULT_TOAST_DURATION];
}

static double const DEFAULT_TOAST_DURATION = 3.5;

//-(void) showToast:(NSString*) msg
//{
//  RCTLogInfo(@"Pretending to create an event %@ at %@", msg, msg);
//    [self showToast:msg duration:DEFAULT_TOAST_DURATION];
//}

-(void) showToast:(NSString*) msg duration:(double) duration
{
    UIWindow *window = [[UIWindow alloc] initWithFrame:UIScreen.mainScreen.bounds];
    UIViewController* rootVC = [[UIViewController alloc] init];
    if (rootVC == nil || window == nil)
    {
        return;
    }
    
    window.backgroundColor = [UIColor clearColor];
    window.rootViewController = rootVC;
    [window makeKeyAndVisible];
    
    UIAlertController* alert = [UIAlertController alertControllerWithTitle:nil message:msg preferredStyle:UIAlertControllerStyleActionSheet];
    
    [rootVC presentViewController:alert animated:YES completion:nil];
    
    [self closeToast:window alert:alert duration:duration];
}

- (void) closeToast:(UIWindow*) window alert:(UIAlertController*) alert duration:(double) duration
{
    dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(duration * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
        [alert dismissViewControllerAnimated:YES completion:nil];
        [window removeFromSuperview];
    });
}

- (instancetype)init {
    self = [super init];
    if (self) {
        self.toast = [[RNCalendarManager alloc] init];
    }
    return self;
}

+ (BOOL)requiresMainQueueSetup
{
    return YES;
}

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}

//RCT_EXPORT_MODULE();
//RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
//{
//  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
//}
//RCT_EXPORT_METHOD(findEvents:(RCTResponseSenderBlock)callback)
//{
//  callback(@[@"안녕하세요 ios 네이티브 코드에서 호출"]);
//}

// This would name the module AwesomeCalendarManager instead
// RCT_EXPORT_MODULE(AwesomeCalendarManager);

@end
