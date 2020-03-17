#import "RNNativeToastLibrary.h"
#import "RNCustomToastModule.h"

@interface RNCustomToastModule()

@property (nonatomic, retain) RNNativeToastLibrary *toast;

@end

@implementation RNCustomToastModule

- (instancetype)init {
    self = [super init];
    if (self) {
        self.toast = [[RNNativeToastLibrary alloc] init];
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
RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(show:(NSString *)text)
{
   [self.toast showToast:text];
}

@end
