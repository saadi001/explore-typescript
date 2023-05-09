#include <stdio.h>
#include <math.h>

int main() {
    double a, b , c, discriminent,root, root1, root2, real, img;
    printf("Enter three values ");
    scanf("%lf%lf%lf", &a, &b, &c);
    
    discriminent = b*b - 4*a*c;
    
    if(discriminent > 0){
        root1 = (-b+sqrt(discriminent))/2*a;
        root2 = (-b-sqrt(discriminent))/2*a;
        printf("root1 is %.2lf\n root2 is %.2lf\n", root1, root2);
    }
    else if(discriminent==0){
        root = -b/2*a;
        printf("root1 = root2 = %.2lf", root);
    }
    else{
        real = -b/2*a;
        img = (sqrt(-discriminent))/2*a;
        printf("real part is %.2lf and imaginary part is %.2lf", real, img);
    }

    return 0;
}