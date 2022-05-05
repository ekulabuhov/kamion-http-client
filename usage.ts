import { UsersService } from "./index";
// From external package the import would look like this:
// import { UsersService } from 'kamion-http-client';

class AngularComponent {
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    // Input and output parameters are typed from OpenAPI schema
    this.usersService
      .usersInvite({
        user: {
          email: "test@test.com",
          password: "abc",
          organisationID: "test-org-id",
        },
      })
      .subscribe((response) => {
        if (response.status === "success") {
          console.log("great!");
        }
      });
  }
}
