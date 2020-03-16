//
//  RNHello.m
//  NativeAccess
//
//  Created by benny on 2020/03/16.
//  Copyright © 2020 Facebook. All rights reserved.
//
#import <React/RCTLog.h>
#import "RNHello.h"

@implementation RNHello

// To export a module named CalendarManager
RCT_EXPORT_MODULE();
RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}
RCT_EXPORT_METHOD(findEvents:(RCTResponseSenderBlock)callback)
{
  callback(@[@"안녕하세요 ios 네이티브 코드에서 호출"]);
}
// This would name the module AwesomeCalendarManager instead
// RCT_EXPORT_MODULE(AwesomeCalendarManager);

@end
