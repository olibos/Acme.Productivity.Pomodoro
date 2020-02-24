// <copyright file="IUserDomain.cs" company="Acme">
// Copyright (c) Acme. All rights reserved.
// </copyright>

namespace Acme.Productivity.Pomodoro.Business
{
    using System;
    using System.Linq;

    using Acme.Productivity.Pomodoro.Core;

    /// <summary>
    /// Manage all information about the user.
    /// </summary>
    public interface IUserDomain
    {
        /// <summary>
        /// Authenticate the user.
        /// </summary>
        /// <param name="authentication">The authentication informations.</param>
        /// <returns>The user or null if not authenticated.</returns>
        AuthenticatedUser Authenticate(UserAuthentication authentication);
    }
}