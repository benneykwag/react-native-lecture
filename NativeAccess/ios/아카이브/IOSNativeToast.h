//
//  IOSNativeToast.h
//  NativeAccess
//
//  Created by benny on 2020/03/16.
//  Copyright © 2020 Facebook. All rights reserved.
//
#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface IOSNativeToast : NSObject
-(void) showToast:(NSString*) msg;
-(void) showToast:(NSString*) msg duration:(double) duration;
@end

NS_ASSUME_NONNULL_END
