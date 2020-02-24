// <copyright file="AuthenticationController.cs" company="Acme">
// Copyright (c) Acme. All rights reserved.
// </copyright>

namespace Acme.Productivity.Pomodoro.Web.Controllers
{
    using System;
    using System.Linq;

    using Acme.Productivity.Pomodoro.Business;
    using Acme.Productivity.Pomodoro.Core;

    using Microsoft.AspNetCore.Mvc;

    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly IUserDomain _userDomain;

        public AuthenticationController(IUserDomain userDomain)
        {
            this._userDomain = userDomain;
        }

        /// <summary>
        /// Authenticate the user.
        /// </summary>
        /// <param name="authentication">The authentication informations.</param>
        /// <returns>The user or an error.</returns>
        [Route("api/authenticate")]
        [HttpPost]
        public ActionResult<AuthenticatedUser> Authenticate(UserAuthentication authentication)
        {
            if (!this.ModelState.IsValid)
            {
                return this.BadRequest();
            }

            var user = this._userDomain.Authenticate(authentication);

            if (user != null)
            {
                return this.Ok(user);
            }

            return this.Unauthorized();
        }
    }
}