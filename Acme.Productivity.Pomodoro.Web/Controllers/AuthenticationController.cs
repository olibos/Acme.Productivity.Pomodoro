// <copyright file="AuthenticationController.cs" company="Acme">
// Copyright (c) Acme. All rights reserved.
// </copyright>

namespace Acme.Productivity.Pomodoro.Web.Controllers
{
    using System;
    using System.IdentityModel.Tokens.Jwt;
    using System.Linq;
    using System.Security.Cryptography;
    using System.Text;
    using System.Threading.Tasks;

    using Acme.Productivity.Pomodoro.Business;
    using Acme.Productivity.Pomodoro.Core;

    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Configuration;
    using Microsoft.IdentityModel.Tokens;

    /// <summary>
    /// All api to authenticate the user.
    /// </summary>
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly IConfiguration configuration;
        private readonly UserDomain userDomain;

        /// <summary>
        /// Initializes a new instance of the <see cref="AuthenticationController"/> class.
        /// </summary>
        /// <param name="userDomain">The user domain to use.</param>
        /// <param name="configuration">The base configuration.</param>
        public AuthenticationController(UserDomain userDomain, IConfiguration configuration)
        {
            this.userDomain = userDomain;
            this.configuration = configuration;
        }

        /// <summary>
        /// Authenticate the user.
        /// </summary>
        /// <param name="authentication">The authentication informations.</param>
        /// <returns>The user or an error.</returns>
        [Route("api/authenticate")]
        [HttpPost]
        public async Task<ActionResult<AuthenticatedUser>> Authenticate(UserAuthentication authentication)
        {
            if (!this.ModelState.IsValid)
            {
                return this.BadRequest();
            }

            var user = await this.userDomain.AuthenticateAsync(authentication);

            if (user == null)
            {
                return this.Unauthorized();
            }

            var keyBytes = new Rfc2898DeriveBytes(Encoding.UTF8.GetBytes(this.configuration["jwt:key"]), Encoding.UTF8.GetBytes(this.configuration["jwt:saltz"]), 4200);
            var key = new SymmetricSecurityKey(keyBytes.GetBytes(512 / 8));
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha512);
            var token = new JwtSecurityToken(
                this.configuration["jwt:issuer"],
                this.configuration["jwt:issuer"],
                expires: DateTime.Now.AddMinutes(30),
                signingCredentials: credentials);

            user.Bearer = new JwtSecurityTokenHandler().WriteToken(token);

            return this.Ok(user);
        }

        /// <summary>
        /// Check if the user is connected.
        /// </summary>
        /// <returns>OK, no content if user is connected.</returns>
        [Route("api/authenticate/check")]
        [HttpGet]
        [Authorize]
        public ActionResult Check()
        {
            return this.NoContent();
        }
    }
}